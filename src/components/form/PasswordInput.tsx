import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, TextInput } from 'react-native';
import type { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';

import { colors } from '../../config/theme';
import { usePasswordVisibility } from '../../hooks/usePasswordVisibility';
import { formStyles } from '../../styles/FormStyles';
import InputRow from './InputRow';

type PasswordInputProps = Omit<TextInputProps, 'secureTextEntry'> & {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  visible?: boolean;
  onToggle?: () => void;
  showLabel?: string;
  hideLabel?: string;
};

export default function PasswordInput({
  containerStyle,
  inputStyle,
  style,
  visible: controlledVisible,
  onToggle,
  showLabel = 'Mostrar senha',
  hideLabel = 'Ocultar senha',
  ...props
}: PasswordInputProps) {
  const visibility = usePasswordVisibility();
  const visible = controlledVisible ?? visibility.visible;
  const toggle = onToggle ?? visibility.toggle;

  return (
    <InputRow icon="lock-outline" style={containerStyle}>
      <TextInput
        placeholder="••••••••••"
        placeholderTextColor={colors.placeholder}
        {...props}
        secureTextEntry={!visible}
        style={[formStyles.input, formStyles.inputFlex, style, inputStyle]}
      />
      <Pressable
        accessibilityLabel={visible ? hideLabel : showLabel}
        accessibilityRole="button"
        onPress={toggle}
        style={formStyles.eyeButton}
      >
        <MaterialCommunityIcons
          name={visible ? 'eye-off-outline' : 'eye-outline'}
          size={17}
          color={colors.icon}
        />
      </Pressable>
    </InputRow>
  );
}
