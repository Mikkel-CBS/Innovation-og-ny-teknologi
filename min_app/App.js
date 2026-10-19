import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';
import GroupsStack from './components/GroupsStackComponent';
import StackNavigation from './components/StackComponent';
import MyGroupsScreen from './screens/MyGroupsScreen';
import { navigationStyles } from './styles/GlobalStyles';

// Samler appens tre hovedområder i en navigation nederst på skærmen.
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // NavigationContainer holder styr på den aktuelle side og navigationshistorikken.
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          ...navigationStyles,
          // Vælger et ikon ud fra hvilken fane der er aktiv.
          tabBarIcon: ({ focused, color, size }) => {
            const icons = {
              'Find grupper': focused ? 'search' : 'search-outline',
              'Mine grupper': focused ? 'people' : 'people-outline',
              Profil: focused ? 'person' : 'person-outline',
            };

            return <Ionicons name={icons[route.name]} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Find grupper"
          component={GroupsStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Mine grupper"
          component={MyGroupsScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Profil" component={StackNavigation} options={{ headerShown: false }} />
      </Tab.Navigator>
      {/* Tilpasser statusbaren til appens aktuelle tema. */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
