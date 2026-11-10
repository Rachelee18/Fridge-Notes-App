# Fridge Notes

Aplicativo Expo para anotações na geladeira.

## Iniciar o projeto

```bash
npm install
npm run start
```

A tela inicial exibe uma mensagem de boas-vindas do Expo. As funcionalidades do aplicativo serão adicionadas conforme forem solicitadas.

## Login com Google

O login com Google usa `expo-auth-session` com o fluxo OAuth por navegador e PKCE. Nenhum client secret é usado (o app não tem backend).

### Criar os client IDs

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/) e crie/selecione um projeto.
2. Configure a tela de consentimento OAuth.
3. Em **APIs & Services → Credentials → Create credentials → OAuth client ID**, crie:
   - **Web application** → `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID`
   - **iOS** → `EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID`
   - **Android** → `EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID`

Redirect URIs:

- App nativo (scheme `fridgenotesapp`): `fridgenotesapp://`
- Web em desenvolvimento: `http://localhost:8081`

### Configurar as variáveis

Copie `.env.example` para `.env` e preencha os client IDs:

```bash
cp .env.example .env
```

```dotenv
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=...
EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=...
EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID=...
```

O `.env` não é versionado. Sem os client IDs, o botão **Entrar com Google** apenas exibe uma mensagem amigável informando que o login não está configurado.

### Rodar

Após criar ou alterar o `.env`, **reinicie o Expo** (pare o processo e rode `npm run start` novamente) para que as variáveis sejam carregadas.

### Limitações atuais

- Sem backend, a sessão existe apenas em memória e é perdida ao fechar o app.
- A troca para `@react-native-google-signin/google-signin` exigiria um development build (não funciona no Expo Go).
