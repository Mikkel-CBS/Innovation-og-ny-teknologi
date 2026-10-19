import { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {
  deleteGroup,
  getMembership,
  joinGroup,
  leaveGroup,
} from '../database/groups';
import { globalStyles } from '../styles/GlobalStyles';

export default function GroupDetailsScreen({ navigation, route }) {
  // Henter det opslag, som brugeren trykkede på.
  const { group } = route.params;
  // Holder styr på, om kunden har tilmeldt sig gruppen.
  const [joined, setJoined] = useState(false);
  const [joining, setJoining] = useState(false);
  const [participants, setParticipants] = useState(group.participants);

  useEffect(() => {
    // Kontrollerer ved åbning, om den lokale bruger allerede er tilmeldt.
    getMembership(group).then(setJoined).catch(() => {
      Alert.alert('Fejl', 'Din tilmelding kunne ikke hentes.');
    });
  }, [group]);

  async function handleMembership() {
    setJoining(true);
    try {
      // Den samme knap bruges til både tilmelding og framelding.
      if (joined) {
        await leaveGroup(group);
        setJoined(false);
        setParticipants((currentParticipants) => Math.max(currentParticipants - 1, 0));
      } else {
        await joinGroup(group);
        setJoined(true);
        setParticipants((currentParticipants) => currentParticipants + 1);
      }
    } catch (error) {
      Alert.alert('Kunne ikke opdatere tilmelding', error.message);
    } finally {
      setJoining(false);
    }
  }

  // Sletter opslaget efter en tydelig bekræftelse fra brugeren.
  function handleDelete() {
    Alert.alert('Slet opslag', 'Er du sikker på, at du vil slette dette opslag?', [
      { text: 'Annuller', style: 'cancel' },
      {
        text: 'Slet',
        style: 'destructive',
        onPress: async () => {
          try {
            await deleteGroup(group.companyId, group.id);
            navigation.goBack();
          } catch (error) {
            Alert.alert('Kunne ikke slette', 'Opslaget kunne ikke slettes fra Firebase.');
          }
        },
      },
    ]);
  }

  return (
    <View style={globalStyles.screen}>
      {/* Kunden kan se rabatten og tilmelde sig gruppen her. */}
      <Text style={globalStyles.eyebrow}>{group.area.toUpperCase()}</Text>
      <Text style={globalStyles.screenTitle}>{group.service}</Text>
      <Text style={globalStyles.screenSubtitle}>{group.company}</Text>
      <Text style={globalStyles.screenSubtitle}>{group.description}</Text>
      <View style={globalStyles.detailCard}>
        {/* Viser gruppens forventede rabat og fremdrift. */}
        <Text style={globalStyles.detailLabel}>FORVENTET RABAT</Text>
        <Text style={globalStyles.detailDiscount}>{group.discount}</Text>
        <Text style={globalStyles.cardMeta}>{group.price}  ·  {group.deadline}</Text>
        <View style={globalStyles.progressTrack}>
          <View
            style={[
              globalStyles.progressFill,
              // Viser hvor tæt gruppen er på sit mål.
              { width: `${(participants / group.target) * 100}%` },
            ]}
          />
        </View>
        <Text style={globalStyles.cardDetail}>
          {participants} af {group.target} deltagere er med
        </Text>
      </View>
      <ButtonComponent
        title={joining ? 'Opdaterer...' : joined ? 'Frameld gruppen' : 'Bliv medlem af gruppen'}
        onPress={handleMembership}
      />
      {/* Beskeden vises kun, mens brugeren faktisk er tilmeldt. */}
      {joined && !joining && (
        <Text style={globalStyles.successText}>
          Du får besked, når den bedste lokale deal er fundet.
        </Text>
      )}
      <ButtonComponent title="Slet opslag" onPress={handleDelete} />
      <Text style={globalStyles.noteText}>
        Prisen fastsættes, når deadline udløber. Du accepterer først en aftale, når du bekræfter den.
      </Text>
    </View>
  );
}
