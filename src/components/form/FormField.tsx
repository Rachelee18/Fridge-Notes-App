import { Text, View } from 'react-native';

import { formStyles } from '../../styles/FormStyles';
import type { FormFieldProps } from '../../types';

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
