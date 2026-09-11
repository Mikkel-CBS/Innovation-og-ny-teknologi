import { View } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import { globalStyles } from '../styles/GlobalStyles';

const navController = (navigation, route) => {
  navigation.navigate(route);
};

export default function SettingsScreen({ navigation }) {
  return (
    <View style={globalStyles.centeredScreen}>
      <ButtonComponent
        onPress={() => navController(navigation, 'User Profile')}
        title="User Profile"
      />
      <ButtonComponent
        onPress={() => navController(navigation, 'App Details')}
        title="App Details"
      />
    </View>
  );
}
