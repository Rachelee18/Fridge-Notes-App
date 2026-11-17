import { StyleSheet } from 'react-native';

import { colors } from '../config/theme';

export const screenHeaderStyles = StyleSheet.create({
  header: {
    backgroundColor: colors.primaryBlue,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    height: 36,
    width: '100%',
  },
  backButton: {
    alignItems: 'center',
    height: 18,
    justifyContent: 'center',
    width: 60,
  },
});
