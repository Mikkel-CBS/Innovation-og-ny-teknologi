import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';
import StackNavigation from './components/StackComponent';
import HomeScreen from './screens/HomeScreen';
import ListeScreen from './screens/ListeScreen';
import { navigationStyles } from './styles/GlobalStyles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          ...navigationStyles,
          tabBarIcon: ({ focused, color, size }) => {
            const icons = {
              Home: focused ? 'home' : 'home-outline',
              Liste: focused ? 'list' : 'list-outline',
              Settings: focused ? 'settings' : 'settings-outline',
            };

            return <Ionicons name={icons[route.name]} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Liste" component={ListeScreen} />
        <Tab.Screen name="Settings" component={StackNavigation} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
