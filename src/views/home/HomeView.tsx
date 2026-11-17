import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { assets } from '../../config/assets';
import { homeStyles as styles } from '../../styles/HomeStyles';
import { useHomeViewModel } from '../../viewmodels/useHomeViewModel';

export default function HomeView() {
  const { goToLogin } = useHomeViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image source={assets.logoTransparent} style={styles.logo} resizeMode="contain" />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.description}>Anote, compartilhe e organize tudo em um só lugar.</Text>

        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.continueButton, pressed && styles.pressed]}
          onPress={goToLogin}
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
