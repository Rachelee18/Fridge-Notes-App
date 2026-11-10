import type { output, ZodType } from "zod";

export type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; message: string; fieldErrors: Record<string, string> };

export function validateForm<TSchema extends ZodType>(
  schema: TSchema,
  values: unknown,
): ValidationResult<output<TSchema>> {
  const result = schema.safeParse(values);

  if (result.success) {
    return { ok: true, data: result.data };
  }

  const fieldErrors: Record<string, string> = {};

  for (const issue of result.error.issues) {
    const key = issue.path.join(".");

    if (key && !(key in fieldErrors)) {
      fieldErrors[key] = issue.message;
    }
  }

  return {
    ok: false,
    message: result.error.issues[0]?.message ?? "Dados inválidos.",
    fieldErrors,
  };
}
