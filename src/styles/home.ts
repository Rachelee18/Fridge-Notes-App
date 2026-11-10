import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  hero: {
    flex: 1,
    minHeight: 390,
    marginHorizontal: 18,
    backgroundColor: '#8bbcf2',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width: '78%', height: 190 },
  content: { padding: 28, paddingTop: 28, flex: 0.62 },
  title: { color: '#143d9f', fontFamily: 'Quicksand_700Bold', fontSize: 27, marginBottom: 8 },
  description: { color: '#3159af', fontFamily: 'Quicksand_400Regular', fontSize: 15, lineHeight: 22, maxWidth: 280 },
  continueButton: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 'auto',
    paddingVertical: 8,
  },
  continueText: { color: '#143d9f', fontFamily: 'Quicksand_700Bold', fontSize: 14 },
  arrowCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#91c3fa',
  },
  arrow: { color: '#143d9f', fontSize: 20, lineHeight: 22 },
  pressed: { opacity: 0.7 },
});
