import Ionicons from '@react-native-vector-icons/ionicons';
import { colors } from './colors';

// Fælles header- og tab-bar-indstillinger for alle navigators.
export const navigationStyles = {
  // Definerer pilen eksplicit, så alle tilbageknapper ser ens ud.
  headerBackImage: ({ tintColor }) => (
    <Ionicons name="chevron-back" size={28} color={tintColor || colors.ink} />
  ),
  headerBackTitle: 'Back',
  headerBackTitleVisible: true,
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: colors.surface,
    shadowColor: colors.ink,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  headerTitleStyle: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: '700',
  },
  tabBarStyle: {
    height: 68,
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: colors.tabBar,
    borderTopWidth: 0,
    shadowColor: colors.ink,
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 8,
  },
  tabBarActiveTintColor: colors.accent,
  tabBarInactiveTintColor: colors.tabInactive,
};
