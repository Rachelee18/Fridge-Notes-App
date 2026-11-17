import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import { colors } from '../config/theme';
import { screenHeaderStyles } from '../styles/ScreenHeaderStyles';

export default function ScreenHeader() {
  return (
    <View style={screenHeaderStyles.header}>
      <Pressable
        accessibilityLabel="Voltar"
        accessibilityRole="button"
        hitSlop={8}
        onPress={() => router.back()}
        style={screenHeaderStyles.backButton}
      >
        <MaterialCommunityIcons name="arrow-left" size={22} color={colors.navy} />
      </Pressable>
    </View>
  );
}
