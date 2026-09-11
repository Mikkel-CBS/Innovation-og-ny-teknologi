import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import AppDetailsScreen from '../screens/StackScreens/AppDetailsScreen';
import UserProfileScreen from '../screens/StackScreens/UserProfileScreen';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Settings Screen">
      <Stack.Screen
        name="Settings Screen"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="User Profile" component={UserProfileScreen} />
      <Stack.Screen name="App Details" component={AppDetailsScreen} />
    </Stack.Navigator>
  );
}
