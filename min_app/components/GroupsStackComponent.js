import { createStackNavigator } from '@react-navigation/stack';
import FindGroupsScreen from '../screens/FindGroupsScreen';
import GroupDetailsScreen from '../screens/GroupDetailsScreen';
import CreateGroupScreen from '../screens/CreateGroupScreen';
import { navigationStyles } from '../styles/GlobalStyles';

// Denne stack indeholder gruppelisten og alle sider, der åbnes fra den.
const Stack = createStackNavigator();

export default function GroupsStackComponent() {
  return (
    // Gruppens oversigt ligger først, så den er startsiden i denne stack.
    <Stack.Navigator screenOptions={navigationStyles}>
      <Stack.Screen
        name="Gruppeoversigt"
        component={FindGroupsScreen}
        options={{ headerShown: false }}
      />
      {/* Åbnes, når brugeren trykker på et gruppe-kort. */}
      <Stack.Screen name="Gruppedetaljer" component={GroupDetailsScreen} />
      <Stack.Screen
        name="Opret opslag"
        component={CreateGroupScreen}
        options={{ title: 'Nyt opslag' }}
      />
    </Stack.Navigator>
  );
}
