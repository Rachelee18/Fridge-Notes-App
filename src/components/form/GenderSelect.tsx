import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { colors } from '../../config/theme';
import { formStyles } from '../../styles/FormStyles';

type GenderSelectProps = {
  value: string;
  options: readonly string[];
  open: boolean;
  onToggle: () => void;
  onSelect: (option: string) => void;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
};

export default function GenderSelect({
  value,
  options,
  open,
  onToggle,
  onSelect,
  placeholder = 'Selecione',
  style,
}: GenderSelectProps) {
  return (
    <>
      <Pressable
        accessibilityRole="button"
        onPress={onToggle}
        style={[formStyles.select, style]}
      >
        <Text style={value ? formStyles.selectText : formStyles.placeholder}>
          {value || placeholder}
        </Text>
        <MaterialCommunityIcons
          name={open ? 'chevron-up' : 'chevron-down'}
          size={17}
          color={colors.icon}
        />
      </Pressable>
      {open && (
        <View style={formStyles.options}>
          {options.map((option) => (
            <Pressable key={option} onPress={() => onSelect(option)} style={formStyles.option}>
              <Text style={formStyles.optionText}>{option}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </>
  );
}
