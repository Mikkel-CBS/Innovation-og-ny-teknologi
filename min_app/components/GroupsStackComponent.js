import { createStackNavigator } from '@react-navigation/stack';
import FindGroupsScreen from '../screens/FindGroupsScreen';
import GroupDetailsScreen from '../screens/GroupDetailsScreen';
import { navigationStyles } from '../styles/GlobalStyles';

// Stack-navigation bruges, når kunden åbner en gruppe.
const Stack = createStackNavigator();

export default function GroupsStackComponent() {
  return (
    // Giver adgang til både gruppelisten og gruppedetaljerne.
    <Stack.Navigator screenOptions={navigationStyles}>
      <Stack.Screen
        name="Gruppeoversigt"
        component={FindGroupsScreen}
        options={{ headerShown: false }}
      />
      {/* Denne side åbnes fra et tryk på et gruppe-kort. */}
      <Stack.Screen name="Gruppedetaljer" component={GroupDetailsScreen} />
    </Stack.Navigator>
  );
}
