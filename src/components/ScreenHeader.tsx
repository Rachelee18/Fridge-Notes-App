import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

export default function ScreenHeader() {
  return (
    <View style={styles.header}>
      <Pressable
        accessibilityLabel="Voltar"
        accessibilityRole="button"
        hitSlop={8}
        onPress={() => router.back()}
        style={styles.backButton}
      >
        <MaterialCommunityIcons name="arrow-left" size={22} color="#143d9f" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8bbcf2',
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
