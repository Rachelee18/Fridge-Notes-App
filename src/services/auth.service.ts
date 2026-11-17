import { MOCK_DELAY_MS } from '../config/api';
import { formatZodError } from '../lib/validation';
import type {
  AuthSession,
  LoginForm,
  RegisterForm,
  ResetPasswordForm,
  User,
} from '../models/auth';
import { loginSchema, registerSchema, resetPasswordSchema } from '../schemas/auth.schema';

function wait(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export class AuthError extends Error {
  readonly fieldErrors: Record<string, string>;

  constructor(message: string, fieldErrors: Record<string, string> = {}) {
    super(message);
    this.name = 'AuthError';
    this.fieldErrors = fieldErrors;
  }
}

class AuthService {
  async login(input: LoginForm): Promise<AuthSession> {
    const parsed = loginSchema.safeParse(input);

    await wait(MOCK_DELAY_MS.auth);

    if (!parsed.success) {
      throw new AuthError('Não foi possível entrar', formatZodError(parsed.error));
    }

    const { email } = parsed.data;

    return {
      token: `mock-token-${Date.now()}`,
      user: {
        id: 'mock-user',
        name: email.split('@')[0] || 'Usuário',
        email,
      },
    };
  }

  async register(input: RegisterForm): Promise<User> {
    const parsed = registerSchema.safeParse(input);

    await wait(MOCK_DELAY_MS.auth);

    if (!parsed.success) {
      throw new AuthError('Não foi possível concluir o cadastro', formatZodError(parsed.error));
    }

    const { name, age, gender, email } = parsed.data;

    return {
      id: `mock-user-${email}`,
      name,
      email,
      age,
      gender,
    };
  }

  async requestPasswordReset(input: ResetPasswordForm): Promise<{ email: string }> {
    const parsed = resetPasswordSchema.safeParse(input);

    await wait(MOCK_DELAY_MS.auth);

    if (!parsed.success) {
      throw new AuthError('Não foi possível enviar o e-mail', formatZodError(parsed.error));
    }

    return { email: parsed.data.email };
  }
}

export const authService = new AuthService();
