import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Pressable,
  Text,
  View,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { subscribeToGroups } from '../database/groups';
import { colors, globalStyles } from '../styles/GlobalStyles';

const services = [
  { id: 'window-cleaning', name: 'Vinduespudsning' },
  { id: 'hedge-trimming', name: 'Hækklipning' },
  { id: 'lawn-mowing', name: 'Græsslåning' },
];

const areas = [
  { id: 'valby', name: 'Valby' },
  { id: 'frederiksberg', name: 'Frederiksberg' },
  { id: 'vanloese', name: 'Vanløse' },
];

// Genanvendeligt dropdown-filter til service og område.
function FilterButton({ label, value, options, onSelect }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Pressable
        style={globalStyles.filterButton}
        onPress={() => setVisible(true)}
        accessibilityLabel={`Filtrer efter ${label}`}
      >
        <Text style={value ? globalStyles.filterText : globalStyles.filterPlaceholder}>
          {value || label}
        </Text>
        <Ionicons name="chevron-down" size={16} color={colors.muted} />
      </Pressable>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <Pressable style={globalStyles.modalOverlay} onPress={() => setVisible(false)}>
          <View style={globalStyles.modalCard}>
            <Text style={globalStyles.modalTitle}>Filtrer efter {label.toLowerCase()}</Text>
            <Pressable
              style={globalStyles.option}
              onPress={() => {
                // Null betyder, at filteret nulstilles til "Alle".
                onSelect(null);
                setVisible(false);
              }}
            >
              <Text style={globalStyles.optionText}>Alle</Text>
            </Pressable>
            {options.map((option) => (
              <Pressable
                key={option.id}
                style={globalStyles.option}
                onPress={() => {
                  onSelect(option);
                  setVisible(false);
                }}
              >
                <Text style={globalStyles.optionText}>{option.name}</Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

export default function FindGroupsScreen({ navigation }) {
  // Gemmer alle Firebase-grupper samt brugerens valgte filtre.
  const [groups, setGroups] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Opretter realtime-lytteren og stopper den, når skærmen forlades.
    const unsubscribe = subscribeToGroups(
      (nextGroups) => {
        setGroups(nextGroups);
        setLoading(false);
        setError(null);
      },
      (firebaseError) => {
        setLoading(false);
        setError(firebaseError);
      },
    );

    return unsubscribe;
  }, []);

  // Filtrerer lokalt på stabile ID'er fra Firebase.
  // Det betyder, at vi ikke behøver hente data fra Firebase igen, når
  // brugeren blot skifter mellem de tilgængelige filtervalg.
  const filteredGroups = groups.filter(
    (group) =>
      (!selectedService || group.serviceId === selectedService.id) &&
      (!selectedArea || group.areaId === selectedArea.id),
  );

  return (
    <View style={globalStyles.screen}>
      {/* Introduktion til de lokale grupper, kunden kan vælge imellem. */}
      <Text style={globalStyles.eyebrow}>LOKALE DEALS</Text>
      <View style={globalStyles.titleRow}>
        <Text style={globalStyles.screenTitle}>Find en gruppe</Text>
        <Pressable
          accessibilityLabel="Opret nyt opslag"
          style={globalStyles.addButton}
          onPress={() => navigation.navigate('Opret opslag')}
        >
          <Ionicons name="add" size={28} color={colors.surface} />
        </Pressable>
      </View>
      <Text style={globalStyles.screenSubtitle}>
        Join naboerne og få mere for pengene.
      </Text>
      <View style={globalStyles.filterRow}>
        <FilterButton
          label="Service"
          value={selectedService?.name}
          options={services}
          onSelect={setSelectedService}
        />
        <FilterButton
          label="Område"
          value={selectedArea?.name}
          options={areas}
          onSelect={setSelectedArea}
        />
      </View>
      {loading && <ActivityIndicator size="large" color={colors.accent} />}
      {error && (
        <Text style={globalStyles.noteText}>
          Grupperne kunne ikke hentes lige nu. Prøv igen senere.
        </Text>
      )}
      {!loading && !error && filteredGroups.length === 0 && (
        <Text style={globalStyles.noteText}>
          {groups.length === 0
            ? 'Der er endnu ikke oprettet nogen lokale deals.'
            : 'Der er ingen deals, der matcher dine filtre.'}
        </Text>
      )}
      {!loading && !error && filteredGroups.length > 0 && (
        <FlatList
          data={filteredGroups}
          contentContainerStyle={globalStyles.groupList}
          // Kombinationen er nødvendig, fordi forskellige virksomheder
          // kan have opslag med samme Firebase-push-ID.
          keyExtractor={(item) => `${item.companyId}-${item.id}`}
          renderItem={({ item }) => (
            // Hele kortet kan trykkes på for at åbne opslagets detaljer.
            <Pressable
              style={({ pressed }) => [
                globalStyles.groupCard,
                pressed && globalStyles.cardPressed,
              ]}
              onPress={() => navigation.navigate('Gruppedetaljer', { group: item })}
            >
              <View style={globalStyles.cardIcon}>
                <Ionicons name={item.icon} size={24} color={colors.accent} />
              </View>
              <View style={globalStyles.cardContent}>
                <View style={globalStyles.cardHeading}>
                  <Text style={globalStyles.cardTitle}>{item.service}</Text>
                  <Text style={globalStyles.discountBadge}>{item.discount}</Text>
                </View>
                <Text style={globalStyles.cardCompany}>{item.company}</Text>
                <Text style={globalStyles.cardMeta}>{item.area}  ·  {item.deadline}</Text>
                <Text style={globalStyles.cardDetail}>
                  {item.participants} af {item.target} deltagere
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.muted} />
            </Pressable>
          )}
        />
      )}
    </View>
  );
}
