import type { TextInputProps } from 'react-native';

export type AgeInputProps = Omit<
  TextInputProps,
  'value' | 'onChangeText' | 'keyboardType' | 'maxLength'
> & {
  value: string;
  onChangeText: (value: string) => void;
  maxLength?: number;
};
