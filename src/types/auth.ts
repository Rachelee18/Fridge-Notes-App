export type AuthMode = 'login' | 'signup';

export type AuthProvider = 'password' | 'google';

export type AuthFormValues = {
  email: string;
  password: string;
  passwordConfirmation?: string;
};

export type AuthCredentials = {
  email: string;
  password: string;
};

export type AuthUser = {
  id: string;
  email: string;
  name: string;
  picture?: string;
  provider: AuthProvider;
};

export type AuthSession = {
  user: AuthUser;
  accessToken: string;
  idToken?: string;
  expiresAt: number;
};

export type AuthErrorCode =
  | 'not_configured'
  | 'cancelled'
  | 'network'
  | 'provider_error'
  | 'missing_profile';

export type AuthResult =
  | { ok: true; session: AuthSession }
  | { ok: false; code: AuthErrorCode; message: string };
