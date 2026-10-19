import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { shadow } from './shadows';

// Styles til gruppelister, gruppe-kort, filtre og gruppedetaljer.
export const groupStyles = StyleSheet.create({
  groupList: {
    paddingBottom: 24,
  },
  groupCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    ...shadow,
  },
  cardPressed: {
    opacity: 0.75,
  },
  cardIcon: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: colors.accentSoft,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  cardTitle: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '700',
  },
  cardCompany: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: '600',
    marginTop: 6,
  },
  cardMeta: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 4,
  },
  cardDetail: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: '600',
    marginTop: 8,
  },
  discountBadge: {
    color: colors.accent,
    backgroundColor: colors.accentSoft,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 12,
    fontWeight: '800',
  },
  detailCard: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 20,
    ...shadow,
  },
  detailLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  detailDiscount: {
    color: colors.accent,
    fontSize: 42,
    fontWeight: '800',
    marginVertical: 4,
  },
  progressTrack: {
    height: 8,
    backgroundColor: colors.accentSoft,
    borderRadius: 4,
    marginTop: 20,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.accent,
    borderRadius: 4,
  },
  addButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accent,
    borderRadius: 24,
    marginBottom: 8,
  },
  filterRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  filterButton: {
    flex: 1,
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  filterText: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: '600',
  },
  filterPlaceholder: {
    color: colors.muted,
    fontSize: 13,
  },
});
