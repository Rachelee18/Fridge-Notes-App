import type { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';

export type PasswordInputProps = Omit<TextInputProps, 'secureTextEntry'> & {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  visible?: boolean;
  onToggle?: () => void;
  showLabel?: string;
  hideLabel?: string;
};
