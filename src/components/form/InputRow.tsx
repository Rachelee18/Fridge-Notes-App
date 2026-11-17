import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../config/theme';
import { formStyles } from '../../styles/FormStyles';
import type { InputRowProps } from '../../types';

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
