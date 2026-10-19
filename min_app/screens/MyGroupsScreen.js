import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Pressable, Text, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { leaveGroup, subscribeToMyGroups } from '../database/groups';
import { colors, globalStyles } from '../styles/GlobalStyles';

export default function MyGroupsScreen({ navigation }) {
  // Indeholder de grupper, som den lokale bruger er tilmeldt.
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lytter realtime, så tilmeldinger og frameldinger vises med det samme.
    const unsubscribe = subscribeToMyGroups(
      (nextGroups) => {
        setGroups(nextGroups);
        setLoading(false);
      },
      () => setLoading(false),
    );
    return unsubscribe;
  }, []);

  async function handleLeave(group) {
    try {
      await leaveGroup(group);
    } catch (error) {
      Alert.alert('Kunne ikke framelde', 'Gruppen kunne ikke opdateres lige nu.');
    }
  }

  return (
    <View style={globalStyles.screen}>
      {/* Viser brugerens aktive gruppeaftaler. */}
      <Text style={globalStyles.eyebrow}>DIT OVERBLIK</Text>
      <Text style={globalStyles.screenTitle}>Mine grupper</Text>
      <Text style={globalStyles.screenSubtitle}>
        Her kan du følge dine aktive gruppeaftaler.
      </Text>
      {loading && <ActivityIndicator size="large" color={colors.accent} />}
      {!loading && groups.length === 0 && <View style={globalStyles.emptyState}>
        <Text style={globalStyles.emptyStateTitle}>Du er ikke med i en gruppe endnu</Text>
        <Text style={globalStyles.emptyStateText}>
          Find en lokal service på første side og vær med til at udløse en bedre pris.
        </Text>
      </View>}
      {!loading && groups.length > 0 && (
        <FlatList
          data={groups}
          // Samme sammensatte nøgle bruges som på gruppelisten, fordi
          // opslagets ID kun er unikt inden for den enkelte virksomhed.
          keyExtractor={(item) => `${item.companyId}-${item.id}`}
          renderItem={({ item }) => (
            <Pressable
              style={globalStyles.groupCard}
              onPress={() => navigation.navigate('Find grupper', {
                screen: 'Gruppedetaljer',
                params: { group: item },
              })}
            >
              <View style={globalStyles.cardIcon}>
                <Ionicons name={item.icon} size={24} color={colors.accent} />
              </View>
              <View style={globalStyles.cardContent}>
                <Text style={globalStyles.cardTitle}>{item.service}</Text>
                <Text style={globalStyles.cardCompany}>{item.company}</Text>
                <Text style={globalStyles.cardMeta}>{item.area}  ·  {item.deadline}</Text>
              </View>
              <Pressable onPress={() => handleLeave(item)} accessibilityLabel="Frameld gruppe">
                <Ionicons name="remove-circle-outline" size={26} color={colors.accent} />
              </Pressable>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}
