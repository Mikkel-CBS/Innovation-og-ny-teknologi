import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    // Profilen ligger i sin egen stack, så den kan udvides senere.
    <Stack.Navigator>
      <Stack.Screen
        name="Profil"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
