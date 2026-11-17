import { Pressable, Text } from 'react-native';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { primaryButtonStyles } from '../../styles/UiStyles';

type PrimaryButtonProps = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  accessibilityLabel?: string;
};

export default function PrimaryButton({
  label,
  onPress,
  disabled = false,
  style,
  textStyle,
  accessibilityLabel,
}: PrimaryButtonProps) {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        primaryButtonStyles.button,
        style,
        pressed && primaryButtonStyles.pressed,
        disabled && primaryButtonStyles.disabled,
      ]}
    >
      <Text style={[primaryButtonStyles.text, textStyle]}>{label}</Text>
    </Pressable>
  );
}
