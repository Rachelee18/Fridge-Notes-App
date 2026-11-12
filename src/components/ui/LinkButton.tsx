import { Pressable, Text } from 'react-native';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { linkButtonStyles } from '../../styles/UiStyles';

type LinkButtonProps = {
  label: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  accessibilityLabel?: string;
};

export default function LinkButton({
  label,
  onPress,
  style,
  textStyle,
  accessibilityLabel,
}: LinkButtonProps) {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [style, pressed && linkButtonStyles.pressed]}
    >
      <Text style={[linkButtonStyles.text, textStyle]}>{label}</Text>
    </Pressable>
  );
}
