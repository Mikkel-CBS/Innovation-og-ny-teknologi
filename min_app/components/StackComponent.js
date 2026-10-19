import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileInformationScreen from '../screens/ProfileInformationScreen';
import MyPostsScreen from '../screens/MyPostsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import { navigationStyles } from '../styles/GlobalStyles';

// Profilen har sin egen stack, så profilsiderne kan navigere uafhængigt.
const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    // Første side er profiloversigten; de øvrige sider åbnes fra knapperne dér.
    <Stack.Navigator screenOptions={navigationStyles}>
      <Stack.Screen
        name="Profiloversigt"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profiloplysninger"
        component={ProfileInformationScreen}
        options={{ title: 'Profiloplysninger' }}
      />
      <Stack.Screen
        name="Alle opslag"
        component={MyPostsScreen}
        options={{ title: 'Alle opslag' }}
      />
      <Stack.Screen name="Historik" component={HistoryScreen} />
    </Stack.Navigator>
  );
}
