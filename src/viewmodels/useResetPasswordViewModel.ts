import { useState } from 'react';

import { validate } from '../lib/validation';
import type { ResetPasswordForm } from '../models/auth';
import { resetPasswordSchema } from '../schemas/auth.schema';
import { AuthError, authService } from '../services/auth.service';
import type { FieldErrors } from '../types/forms';

export function useResetPasswordViewModel() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<FieldErrors<ResetPasswordForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const changeEmail = (value: string) => {
    setEmail(value);
    setSent(false);
    setErrors((current) => {
      if (current.email === undefined) {
        return current;
      }

      return { ...current, email: undefined };
    });
  };

  const submit = async () => {
    const result = validate(resetPasswordSchema, { email });

    if (!result.success) {
      setErrors(result.errors);
      setSent(false);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await authService.requestPasswordReset({ email });
      setSent(true);
    } catch (error) {
      if (error instanceof AuthError) {
        setErrors(error.fieldErrors as FieldErrors<ResetPasswordForm>);
      } else {
        setErrors({ form: 'Não foi possível enviar o e-mail' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    email,
    errors,
    isSubmitting,
    sent,
    submit,
    changeEmail,
  };
}
