import { z } from 'zod';

import type { AuthMode } from '../types';
import { emailSchema, passwordSchema } from './common';
import { validateForm, type ValidationResult } from './result';

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const signupSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    passwordConfirmation: z.string().optional(),
  })
  .superRefine((values, ctx) => {
    if (values.password !== (values.passwordConfirmation ?? '')) {
      ctx.addIssue({
        code: 'custom',
        message: 'As senhas não coincidem.',
        path: ['passwordConfirmation'],
      });
    }
  });

export type AuthFormValues = {
  email: string;
  password: string;
  passwordConfirmation?: string;
};

export type AuthCredentials = {
  email: string;
  password: string;
};

export function validateAuthForm(
  mode: AuthMode,
  values: AuthFormValues,
): ValidationResult<AuthCredentials> {
  const result = validateForm(mode === 'signup' ? signupSchema : loginSchema, values);

  if (!result.ok) {
    return result;
  }

  return {
    ok: true,
    data: {
      email: result.data.email,
      password: result.data.password,
    },
  };
}
