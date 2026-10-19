import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { shadow } from './shadows';

// Styles til profilkort og ældre, genanvendelige profilkomponenter.
export const profileStyles = StyleSheet.create({
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 16,
    ...shadow,
  },
  profileAvatar: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 26,
    backgroundColor: colors.accent,
    marginRight: 12,
  },
  profileAvatarText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '800',
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
  picture: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 16,
  },
});
