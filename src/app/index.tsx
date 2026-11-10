import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import type { AuthMode } from "@/types";
import { validateAuthForm } from "@/validation";

export default function LoginScreen() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");

  function submitForm() {
    const result = validateAuthForm(mode, {
      email,
      password,
      passwordConfirmation,
    });

    if (!result.ok) {
      setMessage(result.message);
      return;
    }

    setMessage(
      mode === "signup"
        ? "Cadastro ainda não conectado a um serviço de autenticação."
        : "Login ainda não conectado a um serviço de autenticação.",
    );
  }

  function switchMode() {
    setMode(mode === "login" ? "signup" : "login");
    setMessage("");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Text accessibilityRole="header">Fridge Notes</Text>
          <Text>
            {mode === "login" ? "Entrar na sua conta" : "Criar uma conta"}
          </Text>

          <Text>E-mail</Text>
          <TextInput
            accessibilityLabel="E-mail"
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            onChangeText={setEmail}
            placeholder="seu@email.com"
            textContentType="emailAddress"
            value={email}
          />

          <Text>Senha</Text>
          <TextInput
            accessibilityLabel="Senha"
            autoComplete={
              mode === "signup" ? "new-password" : "current-password"
            }
            onChangeText={setPassword}
            placeholder="Mínimo de 8 caracteres"
            secureTextEntry
            textContentType={mode === "signup" ? "newPassword" : "password"}
            value={password}
          />

          {mode === "signup" && (
            <>
              <Text>Confirme a senha</Text>
              <TextInput
                accessibilityLabel="Confirme a senha"
                autoComplete="new-password"
                onChangeText={setPasswordConfirmation}
                placeholder="Digite a senha novamente"
                secureTextEntry
                textContentType="newPassword"
                value={passwordConfirmation}
              />
            </>
          )}

          <Pressable accessibilityRole="button" onPress={submitForm}>
            <Text>{mode === "login" ? "Entrar" : "Criar conta"}</Text>
          </Pressable>

          <Text>ou</Text>

          <Pressable
            accessibilityRole="button"
            onPress={() =>
              setMessage(
                "Login com Google ainda precisa ser conectado ao OAuth do aplicativo.",
              )
            }
          >
            <Text>Continuar com Google</Text>
          </Pressable>

          {message ? (
            <Text accessibilityLiveRegion="polite">{message}</Text>
          ) : null}

          <Pressable accessibilityRole="button" onPress={switchMode}>
            <Text>
              {mode === "login"
                ? "Não tem uma conta? Criar conta"
                : "Já tem uma conta? Entrar"}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
