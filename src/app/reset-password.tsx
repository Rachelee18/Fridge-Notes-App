import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TextField } from '../components/ui';

const logo = require('../assets/logo_transp.png');

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.content}>
          <Image source={logo} contentFit="contain" style={styles.logo} />

          <View style={styles.form}>
            <Text style={styles.heading}>Redefinir Senha</Text>

            <TextField
              label="Informe o email cadastrado"
              icon="email-outline"
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              placeholder="email@example.com"
              value={email}
              onChangeText={setEmail}
              helper="Ao clicar em enviar, a sua nova senha será enviada para o email informado."
            />

            <Pressable
              style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
            >
              <Text style={styles.primaryText}>Enviar</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1 },
  content: {
    flex: 1,
    paddingHorizontal: 33,
  },
  logo: {
    width: '100%',
    height: 190,
    marginTop: 70,
    marginBottom: 52,
  },
  form: { flex: 1 },
  heading: {
    color: '#143d9f',
    fontFamily: 'Quicksand_700Bold',
    fontSize: 23,
    marginBottom: 12,
  },
  primaryButton: {
    height: 44,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#173fa5',
    marginTop: 'auto',
    marginBottom: 50,
  },
  primaryText: {
    color: '#fff',
    fontFamily: 'Quicksand_700Bold',
    fontSize: 14,
  },
  pressed: { opacity: 0.7 },
});
