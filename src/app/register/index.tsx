import { router } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Image } from 'expo-image';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../../components/ScreenHeader';

const logo = require('../../assets/logo_transp.png');

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showGenderOptions, setShowGenderOptions] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScreenHeader />
        <View style={styles.content}>
          <Image source={logo} contentFit="contain" style={styles.logo} />
          <Text style={styles.heading}>Novo Cadastro</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            placeholder="Seu nome aqui"
            placeholderTextColor="#b9bec9"
            style={[styles.input, styles.inputLine]}
            value={name}
            onChangeText={setName}
          />

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Idade</Text>
              <TextInput
                keyboardType="number-pad"
                maxLength={3}
                placeholder="XX"
                placeholderTextColor="#b9bec9"
                style={[styles.input, styles.inputLine]}
                value={age}
                onChangeText={(value) => setAge(value.replace(/[^0-9]/g, ''))}
              />
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Sexo</Text>
              <Pressable
                accessibilityRole="button"
                onPress={() => setShowGenderOptions((visible) => !visible)}
                style={styles.select}
              >
                <Text style={gender ? styles.selectText : styles.placeholder}>
                  {gender || 'Selecione'}
                </Text>
                <MaterialCommunityIcons
                  name={showGenderOptions ? 'chevron-up' : 'chevron-down'}
                  size={17}
                  color="#7b98ce"
                />
              </Pressable>
              {showGenderOptions && (
                <View style={styles.options}>
                  {['Masculino', 'Feminino', 'Outro'].map((option) => (
                    <Pressable
                      key={option}
                      onPress={() => {
                        setGender(option);
                        setShowGenderOptions(false);
                      }}
                      style={styles.option}
                    >
                      <Text style={styles.optionText}>{option}</Text>
                    </Pressable>
                  ))}
                </View>
              )}
            </View>
          </View>

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            placeholder="email@example.com"
            placeholderTextColor="#b9bec9"
            style={[styles.input, styles.inputLine]}
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputRow}>
            <MaterialCommunityIcons name="lock-outline" size={15} color="#7b98ce" />
            <TextInput
              placeholder="••••••••••"
              placeholderTextColor="#b9bec9"
              secureTextEntry={!showPassword}
              style={[styles.input, styles.inputRowInput]}
              value={password}
              onChangeText={setPassword}
            />
            <Pressable
              accessibilityLabel={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              accessibilityRole="button"
              onPress={() => setShowPassword((visible) => !visible)}
              style={styles.eyeButton}
            >
              <MaterialCommunityIcons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={17}
                color="#7b98ce"
              />
            </Pressable>
          </View>

          <Text style={styles.label}>Repita a senha</Text>
          <View style={styles.inputRow}>
            <MaterialCommunityIcons name="lock-outline" size={15} color="#7b98ce" />
            <TextInput
              placeholder="••••••••••"
              placeholderTextColor="#b9bec9"
              secureTextEntry={!showConfirmation}
              style={[styles.input, styles.inputRowInput]}
              value={confirmation}
              onChangeText={setConfirmation}
            />
            <Pressable
              accessibilityLabel={
                showConfirmation ? 'Ocultar confirmação de senha' : 'Mostrar confirmação de senha'
              }
              accessibilityRole="button"
              onPress={() => setShowConfirmation((visible) => !visible)}
              style={styles.eyeButton}
            >
              <MaterialCommunityIcons
                name={showConfirmation ? 'eye-off-outline' : 'eye-outline'}
                size={17}
                color="#7b98ce"
              />
            </Pressable>
          </View>

          <Pressable style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
            <Text style={styles.primaryText}>Cadastrar</Text>
          </Pressable>

          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>Já tenho uma conta</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#8bbcf2' },
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, paddingHorizontal: 28, paddingTop: 30, paddingBottom: 22 },
  logo: { width: '100%', height: 132, marginBottom: 12 },
  heading: { color: '#143d9f', fontFamily: 'Quicksand_700Bold', fontSize: 21, marginBottom: 20 },
  label: { color: '#143d9f', fontFamily: 'Quicksand_600SemiBold', fontSize: 12, marginBottom: 4 },
  row: { flexDirection: 'row', gap: 48 },
  column: { flex: 1 },
  inputRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 7,
    borderBottomWidth: 1.5,
    borderBottomColor: '#143d9f',
    marginBottom: 13,
  },
  input: {
    color: '#182b55',
    fontFamily: 'Quicksand_400Regular',
    fontSize: 13,
    paddingVertical: 6,
    marginBottom: 13,
  },
  inputLine: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#143d9f',
  },
  select: {
  alignItems: 'center',
  borderBottomWidth: 1.5,
  borderBottomColor: '#143d9f',
  flexDirection: 'row',
  justifyContent: 'space-between',
  minHeight: 31,
  },
  selectText: { color: '#182b55', fontFamily: 'Quicksand_400Regular', fontSize: 13 },
  placeholder: { color: '#b9bec9', fontFamily: 'Quicksand_400Regular', fontSize: 13 },
  options: {
  backgroundColor: '#fff',
  borderColor: '#d8e2f5',
  borderRadius: 6,
  borderWidth: 1,
  elevation: 3,
  position: 'absolute',
  right: 0,
  top: 52,
  width: '100%',
  zIndex: 2,
  },
  option: { paddingHorizontal: 10, paddingVertical: 8 },
  optionText: { color: '#143d9f', fontFamily: 'Quicksand_400Regular', fontSize: 12 },
  inputRowInput: { flex: 1 },
  eyeButton: { padding: 3 },
  primaryButton: {
    height: 38,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#173fa5',
    marginTop: 7,
  },
  primaryText: { color: '#fff', fontFamily: 'Quicksand_700Bold', fontSize: 13 },
  backButton: { alignItems: 'center', marginTop: 16 },
  backText: { color: '#5798f4', fontFamily: 'Quicksand_600SemiBold', fontSize: 11 },
  pressed: { opacity: 0.7 },
});
