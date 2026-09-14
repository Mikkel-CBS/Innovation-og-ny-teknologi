import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';
import GroupsStack from './components/GroupsStackComponent';
import StackNavigation from './components/StackComponent';
import MyGroupsScreen from './screens/MyGroupsScreen';
import { navigationStyles } from './styles/GlobalStyles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Hovednavigationen samler appens tre kundeområder. */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          ...navigationStyles,
          tabBarIcon: ({ focused, color, size }) => {
            // Ikonet skifter, når fanen er aktiv.
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
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
