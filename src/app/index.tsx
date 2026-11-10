import { router } from 'expo-router';
import type { Href } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image source={require('../assets/logo_transp.png')} style={styles.logo} resizeMode="contain" />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.description}>
          Anote, compartilhe e organize tudo em um só lugar.
        </Text>

        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.continueButton, pressed && styles.pressed]}
          onPress={() => router.push('/login' as Href)}
        >
          <Text style={styles.continueText}>Continuar</Text>
          <View style={styles.arrowCircle}>
            <Text style={styles.arrow}>→</Text>
          </View>
        </Pressable>
      </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#8bbcf2' },
  hero: {
    flex: 1,
    minHeight: 390,
    backgroundColor: '#8bbcf2',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width: '78%', height: 190 },
  content: { backgroundColor: '#fff', padding: 28, paddingTop: 28, flex: 0.62 },
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
