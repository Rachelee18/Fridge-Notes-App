import { StyleSheet } from 'react-native';

import { colors, fonts } from '../config/theme';

export const homeStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primaryBlue },
  hero: {
    flex: 1,
    minHeight: 390,
    backgroundColor: colors.primaryBlue,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width: '78%', height: 190 },
  content: { backgroundColor: colors.white, padding: 28, paddingTop: 28, flex: 0.62 },
  title: {
    color: colors.navy,
    fontFamily: fonts.bold,
    fontSize: 27,
    marginBottom: 8,
  },
  description: {
    color: colors.description,
    fontFamily: fonts.regular,
    fontSize: 15,
    lineHeight: 22,
    maxWidth: 280,
  },
  continueButton: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 'auto',
    paddingVertical: 8,
  },
  continueText: { color: colors.navy, fontFamily: fonts.bold, fontSize: 14 },
  arrowCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.arrowCircle,
  },
  arrow: { color: colors.navy, fontSize: 20, lineHeight: 22 },
  pressed: { opacity: 0.7 },
});
