import { FontAwesome5 } from '@expo/vector-icons';
import { Image } from 'expo-image';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import EmailInput from '../../components/form/EmailInput';
import FormField from '../../components/form/FormField';
import InputRow from '../../components/form/InputRow';
import PasswordInput from '../../components/form/PasswordInput';
import ScreenHeader from '../../components/ScreenHeader';
import LinkButton from '../../components/ui/LinkButton';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { assets } from '../../config/assets';
import { colors } from '../../config/theme';
import { formStyles } from '../../styles/FormStyles';
import { loginStyles as styles } from '../../styles/LoginStyles';
import { useLoginViewModel } from '../../viewmodels/useLoginViewModel';

export default function LoginView() {
  const {
    email,
    password,
    errors,
    isSubmitting,
    submit,
    changeEmail,
    changePassword,
    goToResetPassword,
    goToRegister,
    passwordVisible,
    togglePassword,
  } = useLoginViewModel();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScreenHeader />
        <View style={styles.content}>
          <Image source={assets.logoTransparent} contentFit="contain" style={styles.logo} />
          <Text style={styles.heading}>Login</Text>

          <FormField label="E-mail" error={errors.email} labelStyle={styles.label}>
            <InputRow icon="email-outline" style={styles.inputRow}>
              <EmailInput
                placeholder="email@example.com"
                style={styles.input}
                value={email}
                onChangeText={changeEmail}
              />
            </InputRow>
          </FormField>

          <FormField label="Senha" error={errors.password} labelStyle={styles.label}>
            <PasswordInput
              containerStyle={styles.inputRow}
              inputStyle={styles.input}
              value={password}
              onChangeText={changePassword}
              visible={passwordVisible}
              onToggle={togglePassword}
            />
          </FormField>

          <LinkButton
            label="Esqueceu a senha?"
            onPress={goToResetPassword}
            style={styles.forgotButton}
            textStyle={styles.forgotText}
          />

          {errors.form ? (
            <Text accessibilityRole="alert" style={formStyles.errorText}>
              {errors.form}
            </Text>
          ) : null}

          <PrimaryButton
            label="Entrar"
            disabled={isSubmitting}
            onPress={submit}
            style={styles.primaryButton}
            textStyle={styles.primaryText}
          />

          <View style={styles.accountRow}>
            <Text style={styles.secondaryText}>Não tem uma conta? </Text>
            <LinkButton
              label="Cadastre-se"
              onPress={goToRegister}
              textStyle={styles.linkText}
            />
          </View>

          <Text style={styles.orText}>Ou</Text>
          <Pressable
            style={({ pressed }) => [styles.googleButton, pressed && styles.pressed]}
          >
            <FontAwesome5 name="google" size={14} color={colors.google} />
            <Text style={styles.googleText}>Sign up with Google</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
