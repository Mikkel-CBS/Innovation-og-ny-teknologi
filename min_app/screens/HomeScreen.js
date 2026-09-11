import { Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function HomeScreen() {
  return (
    <View style={globalStyles.centeredScreen}>
      <Text style={globalStyles.screenTitle}>Velkommen</Text>
      <Text style={globalStyles.screenSubtitle}>Dit biloverblik, samlet et sted.</Text>
    </View>
  );
}
