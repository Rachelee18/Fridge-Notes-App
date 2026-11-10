import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useCallback, useState } from 'react';
import { Platform } from 'react-native';

import type { AuthResult } from '../types';

WebBrowser.maybeCompleteAuthSession();

/**
 * Client IDs públicos do Google, lidos das variáveis de ambiente do Expo.
 * Nunca inclua o client secret no aplicativo.
 */
export const googleClientIds = {
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
  iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
  androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
} as const;

const currentPlatformClientId =
  Platform.OS === 'ios'
    ? googleClientIds.iosClientId
    : Platform.OS === 'android'
      ? googleClientIds.androidClientId
      : googleClientIds.webClientId;

export const isGoogleConfigured = Boolean(currentPlatformClientId);

/**
 * `Google.useAuthRequest` lança se o client ID da plataforma for `undefined`.
 * Como o hook não pode ser condicional, usamos um valor apenas para manter o
 * hook válido. O fluxo nunca é iniciado quando `isGoogleConfigured` é falso.
 */
const PLACEHOLDER_CLIENT_ID = 'not-configured';

type GoogleProfile = {
  sub: string;
  email?: string;
  name?: string;
  picture?: string;
};

type GoogleTokens = {
  accessToken: string;
  idToken?: string;
  expiresAt?: number;
};

const MISSING_EMAIL_MESSAGE =
  'Não foi possível obter seu e-mail do Google. Tente novamente.';

export function mapGoogleProfile(
  profile: GoogleProfile,
  tokens: GoogleTokens,
): AuthResult {
  if (!profile.email) {
    return {
      ok: false,
      code: 'missing_profile',
      message: MISSING_EMAIL_MESSAGE,
    };
  }

  return {
    ok: true,
    session: {
      user: {
        id: profile.sub,
        email: profile.email,
        name: profile.name ?? profile.email,
        picture: profile.picture,
        provider: 'google',
      },
      accessToken: tokens.accessToken,
      idToken: tokens.idToken,
      expiresAt: tokens.expiresAt ?? Date.now() + 3_600_000,
    },
  };
}

export function useGoogleSignIn(): {
  signIn: () => Promise<AuthResult>;
  isLoading: boolean;
  isConfigured: boolean;
} {
  const [isLoading, setIsLoading] = useState(false);

  const [request, , promptAsync] = Google.useAuthRequest({
    webClientId: googleClientIds.webClientId ?? PLACEHOLDER_CLIENT_ID,
    iosClientId: googleClientIds.iosClientId ?? PLACEHOLDER_CLIENT_ID,
    androidClientId: googleClientIds.androidClientId ?? PLACEHOLDER_CLIENT_ID,
    scopes: ['openid', 'profile', 'email'],
    usePKCE: true,
  });

  const signIn = useCallback(async (): Promise<AuthResult> => {
    if (!isGoogleConfigured) {
      return {
        ok: false,
        code: 'not_configured',
        message:
          'Login com Google não configurado. Defina EXPO_PUBLIC_GOOGLE_*_CLIENT_ID no arquivo .env e reinicie o Expo.',
      };
    }

    if (!request) {
      return {
        ok: false,
        code: 'provider_error',
        message: 'Não foi possível concluir o login com o Google.',
      };
    }

    setIsLoading(true);

    try {
      let response: Awaited<ReturnType<typeof promptAsync>>;

      try {
        response = await promptAsync();
      } catch {
        return {
          ok: false,
          code: 'provider_error',
          message: 'Não foi possível concluir o login com o Google.',
        };
      }

      if (response.type === 'cancel' || response.type === 'dismiss') {
        return {
          ok: false,
          code: 'cancelled',
          message: 'Login com Google cancelado.',
        };
      }

      if (response.type !== 'success') {
        return {
          ok: false,
          code: 'provider_error',
          message: 'Não foi possível concluir o login com o Google.',
        };
      }

      const authentication = response.authentication;
      const accessToken =
        authentication?.accessToken ?? response.params.access_token;
      const idToken =
        authentication?.idToken ?? response.params.id_token;
      const expiresAt = authentication
        ? (authentication.issuedAt + (authentication.expiresIn ?? 3600)) * 1000
        : undefined;

      if (!accessToken) {
        return {
          ok: false,
          code: 'provider_error',
          message: 'Não foi possível concluir o login com o Google.',
        };
      }

      let profileResponse: Response;

      try {
        profileResponse = await fetch(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          },
        );
      } catch {
        return {
          ok: false,
          code: 'network',
          message:
            'Não foi possível concluir o login com o Google. Verifique sua conexão.',
        };
      }

      if (!profileResponse.ok) {
        return {
          ok: false,
          code: 'network',
          message:
            'Não foi possível concluir o login com o Google. Verifique sua conexão.',
        };
      }

      let profile: GoogleProfile;

      try {
        profile = (await profileResponse.json()) as GoogleProfile;
      } catch {
        return {
          ok: false,
          code: 'network',
          message:
            'Não foi possível concluir o login com o Google. Verifique sua conexão.',
        };
      }

      return mapGoogleProfile(profile, { accessToken, idToken, expiresAt });
    } catch {
      return {
        ok: false,
        code: 'provider_error',
        message: 'Não foi possível concluir o login com o Google.',
      };
    } finally {
      setIsLoading(false);
    }
  }, [promptAsync, request]);

  return { signIn, isLoading, isConfigured: isGoogleConfigured };
}
