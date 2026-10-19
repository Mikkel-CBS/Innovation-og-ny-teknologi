import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  get,
  onValue,
  push,
  ref,
  remove,
  runTransaction,
  set,
} from 'firebase/database';
import { rtdb } from './firebase';

const userIdKey = '@sambud/user-id';

// Firebase-nøgler må ikke indeholde disse tegn, så virksomhedsnavnet gøres sikkert.
function companyKey(companyName) {
  return companyName
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[.#$[\]/]/g, '')
    .replace(/\s+/g, '-');
}

// Opretter et lokalt bruger-ID, indtil appen får Firebase Authentication.
async function getUserId() {
  let userId = await AsyncStorage.getItem(userIdKey);
  if (!userId) {
    userId = `user-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    await AsyncStorage.setItem(userIdKey, userId);
  }
  return userId;
}

// Lytter realtime på alle grupper og flader virksomhedsniveauet ud til en liste.
export function subscribeToGroups(onGroups, onError) {
  const groupsRef = ref(rtdb, 'groups');

  return onValue(
    groupsRef,
    (snapshot) => {
      const value = snapshot.val();
      // Firebase gemmer først opslagene under virksomheden. Her omdannes
      // strukturen til en almindelig liste, som skærmen nemmere kan vise.
      const groups = value
        ? Object.entries(value).flatMap(([companyId, companyGroups]) =>
            Object.entries(companyGroups).map(([id, group]) => ({
              id,
              companyId,
              ...group,
            })),
          )
        : [];

      onGroups(groups);
    },
    onError,
  );
}

export function createGroup(group) {
  const companyId = companyKey(group.company);
  // push laver et unikt opslag-ID, mens virksomheds-ID'et samler
  // virksomhedens forskellige opslag under samme gren i databasen.
  const groupRef = push(ref(rtdb, `groups/${companyId}`));
  return set(groupRef, group);
}

// Fjerner ét opslag fra den virksomhed, det ligger under.
export function deleteGroup(companyId, groupId) {
  return remove(ref(rtdb, `groups/${companyId}/${groupId}`));
}

export async function getMembership(group) {
  const userId = await getUserId();
  const snapshot = await get(
    ref(rtdb, `memberships/${userId}/${groupKey(group)}`),
  );
  return snapshot.exists();
}

// Kombinerer virksomhedens ID og opslagets ID til en unik medlemskabsnøgle.
function groupKey(group) {
  return `${group.companyId}_${group.id}`;
}

export async function joinGroup(group) {
  const userId = await getUserId();
  const membershipRef = ref(rtdb, `memberships/${userId}/${groupKey(group)}`);
  const existingMembership = await get(membershipRef);
  // Tjekket forhindrer, at samme bruger bliver talt med flere gange.
  if (existingMembership.exists()) {
    return;
  }

  const groupRef = ref(rtdb, `groups/${group.companyId}/${group.id}/participants`);
  // En transaktion beskytter deltagerantallet, hvis flere tilmelder sig samtidig.
  const result = await runTransaction(groupRef, (participants) => {
    const currentParticipants = Number(participants || 0);
    return currentParticipants < group.target ? currentParticipants + 1 : participants;
  });

  if (!result.committed) {
    throw new Error('Gruppen er fuld.');
  }

  // Medlemskabet gemmes først, når deltagerantallet er blevet opdateret.
  await set(membershipRef, {
    companyId: group.companyId,
    groupId: group.id,
  });
}

export async function leaveGroup(group) {
  const userId = await getUserId();
  const membershipRef = ref(rtdb, `memberships/${userId}/${groupKey(group)}`);
  const existingMembership = await get(membershipRef);
  if (!existingMembership.exists()) {
    return;
  }

  const groupRef = ref(rtdb, `groups/${group.companyId}/${group.id}/participants`);
  // Deltagerantallet kan ikke komme under nul, selv hvis data tidligere
  // skulle have været inkonsistente.
  await runTransaction(groupRef, (participants) =>
    Math.max(Number(participants || 0) - 1, 0),
  );
  await remove(membershipRef);
}

// Lytter både på grupper og medlemskaber, så Mine grupper opdateres automatisk.
export function subscribeToMyGroups(onGroups, onError) {
  // De to lyttere kombineres, fordi både opslag og medlemskaber kan ændre sig.
  let groups = {};
  let memberships = {};
  let unsubscribeGroups;
  let unsubscribeMemberships;
  let cancelled = false;

  getUserId()
    .then((userId) => {
      if (cancelled) return;

      unsubscribeGroups = onValue(
        ref(rtdb, 'groups'),
        (snapshot) => {
          groups = snapshot.val() || {};
          // Beregner listen igen, så nye eller slettede opslag bliver synlige.
          onGroups(getJoinedGroups(groups, memberships));
        },
        onError,
      );
      unsubscribeMemberships = onValue(
        ref(rtdb, `memberships/${userId}`),
        (snapshot) => {
          memberships = snapshot.val() || {};
          // En ændring i medlemskaberne skal straks opdatere Mine grupper.
          onGroups(getJoinedGroups(groups, memberships));
        },
        onError,
      );
    })
    .catch(onError);

  return () => {
    cancelled = true;
    unsubscribeGroups?.();
    unsubscribeMemberships?.();
  };
}

function getJoinedGroups(groups, memberships) {
  // Finder de fulde opslag ud fra de ID'er, brugeren er registreret på.
  return Object.values(memberships).flatMap(({ companyId, groupId }) => {
    // Et medlemskab kan godt pege på et slettet opslag, derfor ignoreres
    // opslaget, hvis det ikke længere findes i Firebase.
    const group = groups[companyId]?.[groupId];
    return group ? [{ id: groupId, companyId, ...group }] : [];
  });
}
