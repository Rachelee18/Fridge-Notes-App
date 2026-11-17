import type { StyleProp, ViewStyle } from 'react-native';

export type GenderSelectProps = {
  value: string;
  options: readonly string[];
  open: boolean;
  onToggle: () => void;
  onSelect: (option: string) => void;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
};
