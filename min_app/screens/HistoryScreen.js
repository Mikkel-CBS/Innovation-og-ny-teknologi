import { Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function HistoryScreen() {
  return (
    // Denne side skal senere vise afsluttede opgaver og tidligere tilmeldinger.
    <View style={globalStyles.screen}>
      <Text style={globalStyles.screenTitle}>Historik</Text>
      <Text style={globalStyles.screenSubtitle}>
        Her kan brugere senere se tidligere opgaver og grupper, de har været tilmeldt, når de er afsluttet.
      </Text>
    </View>
  );
}
