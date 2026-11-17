import { StyleSheet } from 'react-native';

import { colors, fonts } from '../config/theme';

export const registerStyles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primaryBlue },
  container: { flex: 1, backgroundColor: colors.white },
  content: { flex: 1, paddingHorizontal: 28, paddingTop: 30, paddingBottom: 22 },
  logo: { width: '100%', height: 132, marginBottom: 12 },
  heading: {
    color: colors.navy,
    fontFamily: fonts.bold,
    fontSize: 21,
    marginBottom: 20,
  },
  label: {
    color: colors.navy,
    fontFamily: fonts.semiBold,
    fontSize: 12,
    marginBottom: 4,
  },
  row: { flexDirection: 'row', gap: 48 },
  column: { flex: 1 },
  inputRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 7,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.navy,
    marginBottom: 13,
  },
  input: {
    color: colors.inputText,
    fontFamily: fonts.regular,
    fontSize: 13,
    paddingVertical: 6,
    marginBottom: 13,
  },
  inputLine: {
    borderBottomWidth: 1.5,
    borderBottomColor: colors.navy,
  },
  primaryButton: {
    height: 38,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.button,
    marginTop: 7,
  },
  primaryText: { color: colors.white, fontFamily: fonts.bold, fontSize: 13 },
  backButton: { alignItems: 'center', marginTop: 16 },
  backText: { color: colors.link, fontFamily: fonts.semiBold, fontSize: 11 },
  pressed: { opacity: 0.7 },
});
