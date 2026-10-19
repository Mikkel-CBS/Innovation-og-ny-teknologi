import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { shadow } from './shadows';

// Styles til generelt layout, tekster og tomme tilstande.
export const layoutStyles = StyleSheet.create({
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
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  sectionLabel: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '700',
    marginTop: 28,
    marginBottom: 8,
  },
  noteText: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  successText: {
    color: '#2A7A4B',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 12,
  },
  emptyState: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 24,
    ...shadow,
  },
  emptyStateTitle: {
    color: colors.ink,
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  emptyStateText: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 8,
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
