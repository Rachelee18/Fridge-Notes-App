import { TextInput } from 'react-native';
import type { TextInputProps } from 'react-native';

import { colors } from '../../config/theme';
import { formStyles } from '../../styles/FormStyles';

export default function NameInput({
  style,
  placeholderTextColor = colors.placeholder,
  ...props
}: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={placeholderTextColor}
      style={[formStyles.input, style]}
      {...props}
    />
  );
}
