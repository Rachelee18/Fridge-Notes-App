import { TextInput } from 'react-native';

import { colors } from '../../config/theme';
import { formStyles } from '../../styles/FormStyles';
import type { EmailInputProps } from '../../types';

export default function EmailInput({
  style,
  placeholderTextColor = colors.placeholder,
  ...props
}: EmailInputProps) {
  return (
    <TextInput
      autoCapitalize="none"
      autoComplete="email"
      keyboardType="email-address"
      placeholderTextColor={placeholderTextColor}
      style={[formStyles.input, style]}
      {...props}
    />
  );
}
