import { useState } from 'react';
import type { ComponentProps } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import type {
  KeyboardTypeOptions,
  StyleProp,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

type TextFieldProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  icon?: IconName;
  secure?: boolean;
  visibilityLabel?: string;
  helper?: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: TextInputProps['autoCapitalize'];
  autoComplete?: TextInputProps['autoComplete'];
  maxLength?: number;
  style?: StyleProp<ViewStyle>;
};

export function TextField({
  label,
  value,
  onChangeText,
  placeholder,
  icon,
  secure,
  visibilityLabel,
  helper,
  keyboardType,
  autoCapitalize,
  autoComplete,
  maxLength,
  style,
}: TextFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputRow}>
        {icon ? (
          <MaterialCommunityIcons name={icon} size={15} color="#7b98ce" />
        ) : null}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#b9bec9"
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          maxLength={maxLength}
          secureTextEntry={secure && !visible}
        />
        {secure ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`${visible ? 'Ocultar' : 'Mostrar'} ${visibilityLabel ?? label.toLowerCase()}`}
            onPress={() => setVisible((current) => !current)}
            style={styles.eyeButton}
            hitSlop={8}
          >
            <MaterialCommunityIcons
              name={visible ? 'eye-off-outline' : 'eye-outline'}
              size={17}
              color="#7b98ce"
            />
          </Pressable>
        ) : null}
      </View>
      {helper ? <Text style={styles.helper}>{helper}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 13 },
  label: {
    color: '#143d9f',
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 12,
    marginBottom: 4,
  },
  inputRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 7,
    borderBottomWidth: 1.5,
    borderBottomColor: '#143d9f',
  },
  input: {
    flex: 1,
    color: '#182b55',
    fontFamily: 'Quicksand_400Regular',
    fontSize: 13,
    paddingVertical: 6,
  },
  eyeButton: { padding: 3 },
  helper: {
    color: '#65a3f2',
    fontFamily: 'Quicksand_400Regular',
    fontSize: 11,
    lineHeight: 14,
    marginTop: 8,
    maxWidth: 290,
  },
});
