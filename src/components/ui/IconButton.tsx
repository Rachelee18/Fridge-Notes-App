import type { ComponentProps } from 'react';
import { Pressable } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../config/theme';
import { iconButtonStyles } from '../../styles/UiStyles';

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

type IconButtonProps = {
  icon: IconName;
  onPress?: () => void;
  accessibilityLabel: string;
  size?: number;
  color?: string;
  hitSlop?: number;
  style?: StyleProp<ViewStyle>;
};

export default function IconButton({
  icon,
  onPress,
  accessibilityLabel,
  size = 20,
  color = colors.menuIcon,
  hitSlop = 8,
  style,
}: IconButtonProps) {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      hitSlop={hitSlop}
      onPress={onPress}
      style={({ pressed }) => [style, pressed && iconButtonStyles.pressed]}
    >
      <MaterialCommunityIcons name={icon} size={size} color={color} />
    </Pressable>
  );
}
