import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { shadow } from './shadows';

// Styles til formularfelter, dropdowns, modalvinduer og knapper.
export const formStyles = StyleSheet.create({
  formScreen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  formContent: {
    padding: 24,
  },
  input: {
    minHeight: 50,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: colors.ink,
    marginBottom: 12,
  },
  inputLabel: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
  },
  select: {
    minHeight: 50,
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  selectText: {
    color: colors.ink,
    fontSize: 16,
  },
  selectPlaceholder: {
    color: colors.muted,
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  modalCard: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 20,
  },
  modalTitle: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  option: {
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  optionText: {
    color: colors.ink,
    fontSize: 16,
  },
  buttonDisabled: {
    opacity: 0.6,
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
  createButton: {
    alignSelf: 'center',
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
});
