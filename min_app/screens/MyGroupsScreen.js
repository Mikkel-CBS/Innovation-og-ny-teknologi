import { Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function MyGroupsScreen() {
  return (
    <View style={globalStyles.screen}>
      {/* Her kommer kundens aktive grupper til at blive vist senere. */}
      <Text style={globalStyles.eyebrow}>DIT OVERBLIK</Text>
      <Text style={globalStyles.screenTitle}>Mine grupper</Text>
      <Text style={globalStyles.screenSubtitle}>
        Her kan du følge dine aktive gruppeaftaler.
      </Text>
      <View style={globalStyles.emptyState}>
        <Text style={globalStyles.emptyStateTitle}>Du er ikke med i en gruppe endnu</Text>
        <Text style={globalStyles.emptyStateText}>
          Find en lokal service på første side og vær med til at udløse en bedre pris.
        </Text>
      </View>
    </View>
  );
}
