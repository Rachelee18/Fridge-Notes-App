import { z } from 'zod';

import { GENDERS } from '../config/genders';

export const emailSchema = z
  .string({ error: 'E-mail inválido' })
  .trim()
  .toLowerCase()
  .pipe(z.email({ error: 'E-mail inválido' }));

export const passwordSchema = z
  .string({ error: 'A senha deve ter ao menos 8 caracteres' })
  .min(8, { error: 'A senha deve ter ao menos 8 caracteres' });

export const nameSchema = z
  .string({ error: 'Informe seu nome' })
  .trim()
  .min(1, { error: 'Informe seu nome' });

export const ageSchema = z
  .string({ error: 'Idade inválida' })
  .trim()
  .regex(/^\d+$/, { error: 'Idade inválida' })
  .pipe(
    z.coerce
      .number<string>({ error: 'Idade inválida' })
      .int({ error: 'Idade inválida' })
      .min(13, { error: 'Idade deve estar entre 13 e 120' })
      .max(120, { error: 'Idade deve estar entre 13 e 120' }),
  );

export const genderSchema = z
  .string({ error: 'Selecione o sexo' })
  .pipe(z.enum(GENDERS, { error: 'Selecione o sexo' }));

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const registerSchema = z
  .object({
    name: nameSchema,
    age: ageSchema,
    gender: genderSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmation: z.string({ error: 'Confirme a senha' }).min(1, { error: 'Confirme a senha' }),
  })
  .superRefine((values, context) => {
    if (values.confirmation !== values.password) {
      context.addIssue({
        code: 'custom',
        message: 'As senhas não coincidem',
        path: ['confirmation'],
      });
    }
  });

export const resetPasswordSchema = z.object({
  email: emailSchema,
});
