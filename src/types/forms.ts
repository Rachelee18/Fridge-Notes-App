export type FieldErrors<T> = Partial<Record<keyof T | 'form', string>>;

export type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: FieldErrors<T> };
