import { router } from 'expo-router';
import type { Href } from 'expo-router';
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
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const logo = require('../assets/logo_transp.png');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.content}>
          <Image source={logo} contentFit="contain" style={styles.logo} />
          <Text style={styles.heading}>Login</Text>

          <Text style={styles.label}>E-mail</Text>
          <View style={styles.inputRow}>
            <MaterialCommunityIcons name="email-outline" size={15} color="#7b98ce" />
            <TextInput
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              placeholder="email@example.com"
              placeholderTextColor="#b9bec9"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputRow}>
            <MaterialCommunityIcons name="lock-outline" size={15} color="#7b98ce" />
            <TextInput
              placeholder="••••••••••"
              placeholderTextColor="#b9bec9"
              secureTextEntry={!showPassword}
              style={styles.input}
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

          <Pressable
            style={styles.forgotButton}
            onPress={() => router.push('/reset-password' as Href)}
          >
            <Text style={styles.forgotText}>Esqueceu a senha?</Text>
          </Pressable>

          <Pressable style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
            <Text style={styles.primaryText}>Entrar</Text>
          </Pressable>

          <View style={styles.accountRow}>
            <Text style={styles.secondaryText}>Não tem uma conta? </Text>
            <Pressable onPress={() => router.push('/register' as Href)}>
              <Text style={styles.linkText}>Cadastre-se</Text>
            </Pressable>
          </View>

          <Text style={styles.orText}>Ou</Text>
          <Pressable style={({ pressed }) => [styles.googleButton, pressed && styles.pressed]}>
            <FontAwesome5 name="google" size={14} color="#4285F4" />
            <Text style={styles.googleText}>Sign up with Google</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 28, paddingTop: 30, paddingBottom: 22 },
  logo: { width: '100%', height: 155, marginBottom: 18 },
  heading: { color: '#143d9f', fontFamily: 'Quicksand_700Bold', fontSize: 22, marginBottom: 24 },
  label: { color: '#143d9f', fontFamily: 'Quicksand_600SemiBold', fontSize: 12, marginBottom: 5 },
  inputRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 7,
    borderBottomWidth: 1.5,
    borderBottomColor: '#568ff1',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    color: '#182b55',
    fontFamily: 'Quicksand_400Regular',
    fontSize: 13,
    paddingVertical: 7,
  },
  eyeButton: { padding: 3 },
  forgotButton: { alignSelf: 'flex-end', marginTop: -14, marginBottom: 27 },
  forgotText: { color: '#143d9f', fontFamily: 'Quicksand_600SemiBold', fontSize: 11 },
  primaryButton: {
    height: 38,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#173fa5',
  },
  primaryText: { color: '#fff', fontFamily: 'Quicksand_700Bold', fontSize: 13 },
  accountRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 7 },
  secondaryText: { color: '#143d9f', fontFamily: 'Quicksand_400Regular', fontSize: 10 },
  linkText: { color: '#5798f4', fontFamily: 'Quicksand_600SemiBold', fontSize: 10 },
  orText: { alignSelf: 'center', color: '#143d9f', fontFamily: 'Quicksand_400Regular', fontSize: 11, marginVertical: 12 },
  googleButton: {
    height: 38,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#e1e5ed',
  },
  googleG: { color: '#4285f4', fontSize: 17, fontWeight: '700' },
  googleText: { color: '#143d9f', fontFamily: 'Quicksand_700Bold', fontSize: 11 },
  pressed: { opacity: 0.7 },
});
