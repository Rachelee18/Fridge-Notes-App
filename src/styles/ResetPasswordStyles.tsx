import { StyleSheet } from 'react-native';

import { colors, fonts } from '../config/theme';

export const resetPasswordStyles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primaryBlue },
  container: { flex: 1, backgroundColor: colors.white },
  content: {
    flex: 1,
    paddingHorizontal: 33,
  },
  logo: {
    width: '100%',
    height: 190,
    marginTop: 70,
    marginBottom: 52,
  },
  form: { flex: 1 },
  heading: {
    color: colors.navy,
    fontFamily: fonts.bold,
    fontSize: 23,
    marginBottom: 12,
  },
  label: {
    color: colors.navy,
    fontFamily: fonts.semiBold,
    fontSize: 13,
    marginBottom: 5,
  },
  inputRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 7,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.navy,
  },
  input: {
    flex: 1,
    color: colors.inputText,
    fontFamily: fonts.regular,
    fontSize: 13,
    paddingVertical: 6,
  },
  helper: {
    color: colors.helper,
    fontFamily: fonts.regular,
    fontSize: 11,
    lineHeight: 14,
    marginTop: 8,
    maxWidth: 290,
  },
  success: {
    color: colors.navy,
    fontFamily: fonts.regular,
    fontSize: 12,
    marginTop: 8,
    maxWidth: 290,
  },
  primaryButton: {
    height: 44,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.button,
    marginTop: 'auto',
    marginBottom: 50,
  },
  primaryText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 14,
  },
  pressed: { opacity: 0.7 },
});
