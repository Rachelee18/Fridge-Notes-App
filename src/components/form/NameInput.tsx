import { TextInput } from 'react-native';

import { colors } from '../../config/theme';
import { formStyles } from '../../styles/FormStyles';
import type { NameInputProps } from '../../types';

export default function NameInput({
  style,
  placeholderTextColor = colors.placeholder,
  ...props
}: NameInputProps) {
  return (
    <TextInput
      placeholderTextColor={placeholderTextColor}
      style={[formStyles.input, style]}
      {...props}
    />
  );
}
