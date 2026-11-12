import { TextInput } from 'react-native';
import type { TextInputProps } from 'react-native';

import { colors } from '../../config/theme';
import { formStyles } from '../../styles/FormStyles';

export default function EmailInput({
  style,
  placeholderTextColor = colors.placeholder,
  ...props
}: TextInputProps) {
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
