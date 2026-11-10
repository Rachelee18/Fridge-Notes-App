import { z } from 'zod';

export const emailSchema = z
  .string()
  .trim()
  .pipe(z.email({ error: 'Informe um e-mail válido.' }));

export const passwordSchema = z
  .string()
  .min(8, { error: 'A senha deve ter pelo menos 8 caracteres.' });

function isValidCpf(digits: string): boolean {
  if (digits.length !== 11 || /^(\d)\1{10}$/.test(digits)) {
    return false;
  }

  function calculateCheckDigit(length: number): number {
    let sum = 0;

    for (let index = 0; index < length; index += 1) {
      sum += Number(digits[index]) * (length + 1 - index);
    }

    const remainder = (sum * 10) % 11;
    return remainder === 10 ? 0 : remainder;
  }

  return (
    calculateCheckDigit(9) === Number(digits[9]) &&
    calculateCheckDigit(10) === Number(digits[10])
  );
}

export const cpfSchema = z
  .string({ error: 'Informe um CPF válido.' })
  .transform((value) => value.replace(/\D/g, ''))
  .refine(isValidCpf, { error: 'Informe um CPF válido.' });
