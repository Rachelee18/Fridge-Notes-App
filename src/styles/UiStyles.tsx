import { StyleSheet } from 'react-native';

import { colors, fonts } from '../config/theme';

export const primaryButtonStyles = StyleSheet.create({
  button: {
    height: 38,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.button,
  },
  text: { color: colors.white, fontFamily: fonts.bold, fontSize: 13 },
  pressed: { opacity: 0.7 },
  disabled: { opacity: 0.5 },
});

export const linkButtonStyles = StyleSheet.create({
  text: { color: colors.navy, fontFamily: fonts.semiBold, fontSize: 11 },
  pressed: { opacity: 0.7 },
});

export const iconButtonStyles = StyleSheet.create({
  pressed: { opacity: 0.7 },
});
