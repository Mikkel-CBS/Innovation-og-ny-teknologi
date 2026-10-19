import { Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function MyPostsScreen() {
  return (
    // Denne side skal senere vise virksomhedens egne opslag.
    <View style={globalStyles.screen}>
      <Text style={globalStyles.screenTitle}>Alle opslag</Text>
      <Text style={globalStyles.screenSubtitle}>
        Her kan virksomheder senere se og administrere deres opslag.
      </Text>
    </View>
  );
}
