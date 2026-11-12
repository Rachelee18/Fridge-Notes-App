import { TextInput } from 'react-native';
import type { TextInputProps } from 'react-native';

import { colors } from '../../config/theme';
import { onlyDigits } from '../../lib/digits';
import { formStyles } from '../../styles/FormStyles';

type AgeInputProps = Omit<
  TextInputProps,
  'value' | 'onChangeText' | 'keyboardType' | 'maxLength'
> & {
  value: string;
  onChangeText: (value: string) => void;
  maxLength?: number;
};

export default function AgeInput({
  value,
  onChangeText,
  maxLength = 3,
  style,
  placeholderTextColor = colors.placeholder,
  ...props
}: AgeInputProps) {
  return (
    <TextInput
      keyboardType="number-pad"
      maxLength={maxLength}
      placeholder="XX"
      placeholderTextColor={placeholderTextColor}
      style={[formStyles.input, style]}
      value={value}
      onChangeText={(text) => onChangeText(onlyDigits(text, maxLength))}
      {...props}
    />
  );
}
