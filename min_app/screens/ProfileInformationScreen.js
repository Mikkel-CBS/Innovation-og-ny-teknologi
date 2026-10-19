import { Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function ProfileInformationScreen() {
  return (
    // Denne side er reserveret til kommende profiloplysninger og redigering.
    <View style={globalStyles.screen}>
      <Text style={globalStyles.screenTitle}>Profiloplysninger</Text>
      <Text style={globalStyles.screenSubtitle}>
        Her kan du senere se og redigere navn, e-mail, telefonnummer og andre personlige oplysninger.
      </Text>
    </View>
  );
}
