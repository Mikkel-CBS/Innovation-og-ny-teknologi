import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/GlobalStyles';

export default function UserProfileScreen() {
  return (
    <View style={globalStyles.stackScreen}>
      <Text style={globalStyles.stackText}>Din brugerprofil</Text>
    </View>
  );
}
