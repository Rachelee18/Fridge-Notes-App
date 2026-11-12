import type { ComponentProps, ReactNode } from 'react';
import { View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../config/theme';
import { formStyles } from '../../styles/FormStyles';

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

type InputRowProps = {
  icon: IconName;
  children: ReactNode;
  iconSize?: number;
  iconColor?: string;
  style?: StyleProp<ViewStyle>;
};

export default function InputRow({
  icon,
  children,
  iconSize = 15,
  iconColor = colors.icon,
  style,
}: InputRowProps) {
  return (
    <View style={[formStyles.inputRow, style]}>
      <MaterialCommunityIcons name={icon} size={iconSize} color={iconColor} />
      {children}
    </View>
  );
}
