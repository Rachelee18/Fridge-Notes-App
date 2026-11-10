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

### Onde funciona hoje

| Ambiente | Status | Redirect usado |
| --- | --- | --- |
| Web (`npx expo start --web`) | Funciona | `http://localhost:8081` (cadastrar no client **Web application**) |
| Expo Go (iOS/Android) | Não funciona | `exp://<ip>:8081/--/`, que o Google rejeita — não é possível registrar `exp://` no Cloud Console |
| Build nativo de produção | Exige configuração adicional | O `expo-auth-session` usa `<applicationId>:/oauthredirect`; na prática, recomenda-se `@react-native-google-signin/google-signin` em development build |

O `scheme` `fridgenotesapp` existe no `app.json`, mas **não é** o redirect usado pelo `expo-auth-session` em produção (o default em standalone/bare é `<applicationId>:/oauthredirect`) e o Google não aceita esse formato para o client **Web application**.

### Criar os client IDs

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/) e crie/selecione um projeto.
2. Configure a tela de consentimento OAuth.
3. Em **APIs & Services → Credentials → Create credentials → OAuth client ID**, crie:
   - **Web application** → `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID`
   - **iOS** → `EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID`
   - **Android** → `EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID`

Para o cenário que funciona hoje (web), cadastre em **Authorized redirect URIs** do client **Web application**:

- `http://localhost:8081`

Os client IDs iOS/Android ficam reservados para uma futura migração para a lib nativa; eles não tornam o fluxo funcional no Expo Go.

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

Após criar ou alterar o `.env`, **reinicie o Expo** (pare o processo e rode `npm run start` novamente) para que as variáveis sejam carregadas. Para testar o login hoje, use `npx expo start --web`.

### Limitações atuais

- Sem backend, a sessão existe apenas em memória e é perdida ao fechar o app.
- No Expo Go nativo o fluxo falha por limitação do provedor (redirect `exp://`), não por bug do código.
- A migração para `@react-native-google-signin/google-signin` exige um development build (não funciona no Expo Go). Quando isso acontecer, **`src/auth/google.ts` é o único arquivo a trocar**: a UI (`src/app/login.tsx`) e os tipos (`src/types/auth.ts`) permanecem iguais.
