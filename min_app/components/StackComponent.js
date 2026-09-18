import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';

// Profilen har sin egen navigation, hvis der senere kommer flere profilsider.
const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    // Profilen ligger i sin egen stack, så den kan udvides senere.
    <Stack.Navigator>
      <Stack.Screen
        name="Profiloversigt"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
