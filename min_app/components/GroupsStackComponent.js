import { createStackNavigator } from '@react-navigation/stack';
import FindGroupsScreen from '../screens/FindGroupsScreen';
import GroupDetailsScreen from '../screens/GroupDetailsScreen';
import { navigationStyles } from '../styles/GlobalStyles';

const Stack = createStackNavigator();

export default function GroupsStackComponent() {
  return (
    // Giver adgang til både gruppelisten og gruppedetaljerne.
    <Stack.Navigator screenOptions={navigationStyles}>
      <Stack.Screen
        name="Find grupper"
        component={FindGroupsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Gruppedetaljer" component={GroupDetailsScreen} />
    </Stack.Navigator>
  );
}
