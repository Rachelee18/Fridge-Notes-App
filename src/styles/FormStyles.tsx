import { StyleSheet } from 'react-native';

import { colors, fonts } from '../config/theme';

export const formStyles = StyleSheet.create({
  field: {},
  label: {
    color: colors.navy,
    fontFamily: fonts.semiBold,
    fontSize: 12,
    marginBottom: 5,
  },
  errorText: {
    color: colors.error,
    fontFamily: fonts.regular,
    fontSize: 10,
    marginBottom: 6,
  },
  inputRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 7,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.navy,
  },
  input: {
    color: colors.inputText,
    fontFamily: fonts.regular,
    fontSize: 13,
    paddingVertical: 6,
  },
  inputFlex: { flex: 1 },
  eyeButton: { padding: 3 },
  select: {
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: colors.navy,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 31,
  },
  selectText: { color: colors.inputText, fontFamily: fonts.regular, fontSize: 13 },
  placeholder: { color: colors.placeholder, fontFamily: fonts.regular, fontSize: 13 },
  options: {
    backgroundColor: colors.white,
    borderColor: colors.selectBorder,
    borderRadius: 6,
    borderWidth: 1,
    elevation: 3,
    position: 'absolute',
    right: 0,
    top: 52,
    width: '100%',
    zIndex: 2,
  },
  option: { paddingHorizontal: 10, paddingVertical: 8 },
  optionText: { color: colors.navy, fontFamily: fonts.regular, fontSize: 12 },
});
