import type { ReactNode } from 'react';
import { Text, View } from 'react-native';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { formStyles } from '../../styles/FormStyles';

type FormFieldProps = {
  label: string;
  error?: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
};

export default function FormField({
  label,
  error,
  children,
  style,
  labelStyle,
}: FormFieldProps) {
  return (
    <View style={[formStyles.field, style]}>
      <Text style={[formStyles.label, labelStyle]}>{label}</Text>
      {children}
      {error ? (
        <Text accessibilityRole="alert" style={formStyles.errorText}>
          {error}
        </Text>
      ) : null}
    </View>
  );
}
