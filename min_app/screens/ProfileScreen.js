import { Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function ProfileScreen() {
  return (
    <View style={globalStyles.screen}>
      {/* Enkel profilside for kundeoplevelsen i prototypen. */}
      <Text style={globalStyles.eyebrow}>DIN KONTO</Text>
      <Text style={globalStyles.screenTitle}>Profil</Text>
      <Text style={globalStyles.screenSubtitle}>
        Administrer dine oplysninger og præferencer.
      </Text>
      {/* Midlertidige profiloplysninger i prototypen. */}
      <View style={globalStyles.profileCard}>
        <View style={globalStyles.profileAvatar}>
          <Text style={globalStyles.profileAvatarText}>MK</Text>
        </View>
        <View>
          <Text style={globalStyles.cardTitle}>Mikkel</Text>
          <Text style={globalStyles.cardMeta}>Valby  ·  Kunde</Text>
        </View>
      </View>
      <Text style={globalStyles.sectionLabel}>Om SamBud</Text>
      <Text style={globalStyles.emptyStateText}>
        SamBud hjælper naboer med at samle sig om bedre priser på lokale services.
      </Text>
    </View>
  );
}
