import type { z } from 'zod';

import type { FieldErrors, ValidationResult } from '../types/forms';

export function formatZodError(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};

  for (const issue of error.issues) {
    const key = typeof issue.path[0] === 'string' ? issue.path[0] : 'form';

    if (errors[key] === undefined) {
      errors[key] = issue.message;
    }
  }

  return errors;
}

export function validate<TSchema extends z.ZodType>(
  schema: TSchema,
  values: z.input<TSchema>,
): ValidationResult<z.output<TSchema>> {
  const result = schema.safeParse(values);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: FieldErrors<z.output<TSchema>> = {};

  for (const issue of result.error.issues) {
    const field = (
      typeof issue.path[0] === 'string' ? issue.path[0] : 'form'
    ) as keyof z.output<TSchema> | 'form';

    if (errors[field] === undefined) {
      errors[field] = issue.message;
    }
  }

  return { success: false, errors };
}
