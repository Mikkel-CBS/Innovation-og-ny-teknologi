import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/GlobalStyles';

export default function AppDetailsScreen() {
  return (
    <View style={globalStyles.stackScreen}>
      <Text style={globalStyles.stackText}>Om appen</Text>
    </View>
  );
}
