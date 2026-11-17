import { Image } from 'expo-image';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import EmailInput from '../../components/form/EmailInput';
import FormField from '../../components/form/FormField';
import InputRow from '../../components/form/InputRow';
import ScreenHeader from '../../components/ScreenHeader';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { assets } from '../../config/assets';
import { formStyles } from '../../styles/FormStyles';
import { resetPasswordStyles as styles } from '../../styles/ResetPasswordStyles';
import { useResetPasswordViewModel } from '../../viewmodels/useResetPasswordViewModel';

export default function ResetPasswordView() {
  const { email, errors, isSubmitting, sent, submit, changeEmail } =
    useResetPasswordViewModel();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScreenHeader />
        <View style={styles.content}>
          <Image source={assets.logoTransparent} contentFit="contain" style={styles.logo} />

          <View style={styles.form}>
            <Text style={styles.heading}>Redefinir Senha</Text>
            <FormField
              label="Informe o email cadastrado"
              error={errors.email}
              labelStyle={styles.label}
            >
              <InputRow icon="email-outline" iconSize={16}>
                <EmailInput
                  placeholder="email@example.com"
                  style={styles.input}
                  value={email}
                  onChangeText={changeEmail}
                />
              </InputRow>
            </FormField>

            <Text style={styles.helper}>
              Ao clicar em enviar, a sua nova senha será enviada para o email informado.
            </Text>

            {sent ? (
              <Text accessibilityRole="alert" style={styles.success}>
                Enviamos uma nova senha para o e-mail informado.
              </Text>
            ) : null}

            {errors.form ? (
              <Text accessibilityRole="alert" style={formStyles.errorText}>
                {errors.form}
              </Text>
            ) : null}

            <PrimaryButton
              label="Enviar"
              disabled={isSubmitting}
              onPress={submit}
              style={styles.primaryButton}
              textStyle={styles.primaryText}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
