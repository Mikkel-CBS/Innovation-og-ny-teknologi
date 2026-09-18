import { FlatList, Pressable, Text, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { GROUPS } from '../data/groups';
import { colors, globalStyles } from '../styles/GlobalStyles';

export default function FindGroupsScreen({ navigation }) {
  return (
    <View style={globalStyles.screen}>
      {/* Introduktion til de lokale grupper, kunden kan vælge imellem. */}
      <Text style={globalStyles.eyebrow}>LOKALE DEALS</Text>
      <Text style={globalStyles.screenTitle}>Find en gruppe</Text>
      <Text style={globalStyles.screenSubtitle}>
        Join naboerne og få mere for pengene.
      </Text>
      <FlatList
        data={GROUPS}
        contentContainerStyle={globalStyles.groupList}
        // Bruger gruppens id, så hvert element får en stabil nøgle.
        keyExtractor={(item) => item.id}
        // Hvert kort åbner detaljerne for den valgte gruppe.
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              globalStyles.groupCard,
              pressed && globalStyles.cardPressed,
            ]}
            // Sender den valgte gruppe videre til detaljesiden.
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
              <Text style={globalStyles.cardMeta}>{item.area}  ·  {item.deadline}</Text>
              <Text style={globalStyles.cardDetail}>
                {item.participants} af {item.target} deltagere
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.muted} />
          </Pressable>
        )}
      />
    </View>
  );
}
