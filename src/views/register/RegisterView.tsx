import { Image } from 'expo-image';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AgeInput from '../../components/form/AgeInput';
import EmailInput from '../../components/form/EmailInput';
import FormField from '../../components/form/FormField';
import GenderSelect from '../../components/form/GenderSelect';
import NameInput from '../../components/form/NameInput';
import PasswordInput from '../../components/form/PasswordInput';
import ScreenHeader from '../../components/ScreenHeader';
import LinkButton from '../../components/ui/LinkButton';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { assets } from '../../config/assets';
import { GENDERS } from '../../config/genders';
import { formStyles } from '../../styles/FormStyles';
import { registerStyles as styles } from '../../styles/RegisterStyles';
import { useRegisterViewModel } from '../../viewmodels/useRegisterViewModel';

export default function RegisterView() {
  const {
    name,
    age,
    gender,
    email,
    password,
    confirmation,
    errors,
    isSubmitting,
    isGenderOpen,
    submit,
    changeName,
    changeAge,
    changeEmail,
    changePassword,
    changeConfirmation,
    selectGender,
    toggleGender,
    goBack,
  } = useRegisterViewModel();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScreenHeader />
        <View style={styles.content}>
          <Image source={assets.logoTransparent} contentFit="contain" style={styles.logo} />
          <Text style={styles.heading}>Novo Cadastro</Text>

          <FormField label="Nome" error={errors.name} labelStyle={styles.label}>
            <NameInput
              placeholder="Seu nome aqui"
              style={[styles.input, styles.inputLine]}
              value={name}
              onChangeText={changeName}
            />
          </FormField>

          <View style={styles.row}>
            <FormField
              label="Idade"
              error={errors.age}
              labelStyle={styles.label}
              style={styles.column}
            >
              <AgeInput
                style={[styles.input, styles.inputLine]}
                value={age}
                onChangeText={changeAge}
              />
            </FormField>
            <FormField
              label="Sexo"
              error={errors.gender}
              labelStyle={styles.label}
              style={styles.column}
            >
              <GenderSelect
                value={gender}
                options={GENDERS}
                open={isGenderOpen}
                onToggle={toggleGender}
                onSelect={selectGender}
              />
            </FormField>
          </View>

          <FormField label="E-mail" error={errors.email} labelStyle={styles.label}>
            <EmailInput
              placeholder="email@example.com"
              style={[styles.input, styles.inputLine]}
              value={email}
              onChangeText={changeEmail}
            />
          </FormField>

          <FormField label="Senha" error={errors.password} labelStyle={styles.label}>
            <PasswordInput
              containerStyle={styles.inputRow}
              inputStyle={styles.input}
              value={password}
              onChangeText={changePassword}
            />
          </FormField>

          <FormField
            label="Repita a senha"
            error={errors.confirmation}
            labelStyle={styles.label}
          >
            <PasswordInput
              containerStyle={styles.inputRow}
              inputStyle={styles.input}
              value={confirmation}
              onChangeText={changeConfirmation}
              showLabel="Mostrar confirmação de senha"
              hideLabel="Ocultar confirmação de senha"
            />
          </FormField>

          {errors.form ? (
            <Text accessibilityRole="alert" style={formStyles.errorText}>
              {errors.form}
            </Text>
          ) : null}

          <PrimaryButton
            label="Cadastrar"
            disabled={isSubmitting}
            onPress={submit}
            style={styles.primaryButton}
            textStyle={styles.primaryText}
          />

          <LinkButton
            label="Já tenho uma conta"
            onPress={goBack}
            style={styles.backButton}
            textStyle={styles.backText}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
