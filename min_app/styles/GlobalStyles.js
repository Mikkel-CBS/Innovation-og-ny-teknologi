import { StyleSheet } from 'react-native';

export const colors = {
  background: '#F4F7F8',
  surface: '#FFFFFF',
  ink: '#172026',
  muted: '#68757D',
  accent: '#E4572E',
  accentPressed: '#C94320',
  accentSoft: '#FCE5DE',
  border: '#DCE4E7',
  tabBar: '#172026',
  tabInactive: '#AAB8BE',
};

const shadow = {
  shadowColor: '#172026',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 10,
  elevation: 4,
};

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
  },
  centeredScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: 24,
  },
  screenTitle: {
    color: colors.ink,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  screenSubtitle: {
    color: colors.muted,
    fontSize: 15,
    marginBottom: 24,
  },
  listContainer: {
    width: '100%',
    maxWidth: 520,
    maxHeight: 420,
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 8,
    ...shadow,
  },
  car: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '600',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  button: {
    width: '100%',
    maxWidth: 320,
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    borderRadius: 14,
    backgroundColor: colors.accent,
    marginVertical: 8,
    ...shadow,
  },
  buttonPressed: {
    backgroundColor: colors.accentPressed,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  inputLabel: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
  },
  textInput: {
    width: '100%',
    minHeight: 48,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: colors.surface,
    color: colors.ink,
    paddingHorizontal: 16,
  },
  picture: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 16,
  },
  stackScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: 24,
  },
  stackText: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export const navigationStyles = {
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
