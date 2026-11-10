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

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScreenHeader />
        <View style={styles.content}>
          <Image source={logo} contentFit="contain" style={styles.logo} />

          <View style={styles.form}>
            <Text style={styles.heading}>Redefinir Senha</Text>
            <Text style={styles.label}>Informe o email cadastrado</Text>

            <View style={styles.inputRow}>
              <MaterialCommunityIcons name="email-outline" size={16} color="#7b98ce" />
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

            <Text style={styles.helper}>
              Ao clicar em enviar, a sua nova senha será enviada para o email informado.
            </Text>

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
  safeArea: { flex: 1, backgroundColor: '#8bbcf2' },
  container: { flex: 1, backgroundColor: '#fff' },
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
  label: {
    color: '#143d9f',
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 13,
    marginBottom: 5,
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
  helper: {
    color: '#65a3f2',
    fontFamily: 'Quicksand_400Regular',
    fontSize: 11,
    lineHeight: 14,
    marginTop: 8,
    maxWidth: 290,
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
