import { router } from 'expo-router';
import type { Href } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from '../styles/home';

export default function HomeScreen() {
  return (
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
  );
}
