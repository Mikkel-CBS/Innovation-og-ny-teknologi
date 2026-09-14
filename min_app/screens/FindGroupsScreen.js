import { FlatList, Pressable, Text, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { GROUPS } from '../data/groups';
import { colors, globalStyles } from '../styles/GlobalStyles';

export default function FindGroupsScreen({ navigation }) {
  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.eyebrow}>LOKALE DEALS</Text>
      <Text style={globalStyles.screenTitle}>Find en gruppe</Text>
      <Text style={globalStyles.screenSubtitle}>
        Join naboerne og få mere for pengene.
      </Text>
      <FlatList
        data={GROUPS}
        contentContainerStyle={globalStyles.groupList}
        keyExtractor={(item) => item.id}
        // Hvert kort åbner detaljerne for den valgte gruppe.
        renderItem={({ item }) => (
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
