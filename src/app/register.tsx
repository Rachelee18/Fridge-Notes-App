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
import { SafeAreaView } from 'react-native-safe-area-context';

const logo = require('../assets/logo_transp.png');

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.content}>
          <Image source={logo} contentFit="contain" style={styles.logo} />
          <Text style={styles.heading}>Novo Cadastro</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            placeholder="Seu nome aqui"
            placeholderTextColor="#b9bec9"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Idade</Text>
              <TextInput
                keyboardType="number-pad"
                placeholder="XX"
                placeholderTextColor="#b9bec9"
                style={styles.input}
                value={age}
                onChangeText={setAge}
              />
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Sexo</Text>
              <TextInput
                placeholder="Selecione"
                placeholderTextColor="#b9bec9"
                style={styles.input}
                value={gender}
                onChangeText={setGender}
              />
            </View>
          </View>

          <Text style={styles.label}>E-mail</Text>
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

          <Text style={styles.label}>Senha</Text>
          <TextInput
            placeholder="••••••••••"
            placeholderTextColor="#b9bec9"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />

          <Text style={styles.label}>Repita a senha</Text>
          <TextInput
            placeholder="••••••••••"
            placeholderTextColor="#b9bec9"
            secureTextEntry
            style={styles.input}
            value={confirmation}
            onChangeText={setConfirmation}
          />

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
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 28, paddingTop: 30, paddingBottom: 22 },
  logo: { width: '100%', height: 132, marginBottom: 12 },
  heading: { color: '#143d9f', fontFamily: 'Quicksand_700Bold', fontSize: 21, marginBottom: 20 },
  label: { color: '#143d9f', fontFamily: 'Quicksand_600SemiBold', fontSize: 12, marginBottom: 4 },
  row: { flexDirection: 'row', gap: 48 },
  column: { flex: 1 },
  input: {
    color: '#182b55',
    borderBottomWidth: 1.5,
    borderBottomColor: '#143d9f',
    fontFamily: 'Quicksand_400Regular',
    fontSize: 13,
    paddingVertical: 6,
    marginBottom: 13,
  },
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
