import { router } from 'expo-router';
import type { Href } from 'expo-router';
import { useState } from 'react';

import { ROUTES } from '../config/routes';
import { usePasswordVisibility } from '../hooks/usePasswordVisibility';
import { validate } from '../lib/validation';
import type { LoginForm } from '../models/auth';
import { loginSchema } from '../schemas/auth.schema';
import { AuthError, authService } from '../services/auth.service';
import type { FieldErrors } from '../types/forms';

export function useLoginViewModel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<FieldErrors<LoginForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const passwordVisibility = usePasswordVisibility();

  const clearError = (field: keyof LoginForm) => {
    setErrors((current) => {
      if (current[field] === undefined) {
        return current;
      }

      return { ...current, [field]: undefined };
    });
  };

  const changeEmail = (value: string) => {
    setEmail(value);
    clearError('email');
  };

  const changePassword = (value: string) => {
    setPassword(value);
    clearError('password');
  };

  const submit = async () => {
    const result = validate(loginSchema, { email, password });

    if (!result.success) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await authService.login({ email, password });
      router.replace(ROUTES.notes as Href);
    } catch (error) {
      if (error instanceof AuthError) {
        setErrors(error.fieldErrors as FieldErrors<LoginForm>);
      } else {
        setErrors({ form: 'Não foi possível entrar' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const goToResetPassword = () => {
    router.push(ROUTES.resetPassword as Href);
  };

  const goToRegister = () => {
    router.push(ROUTES.register as Href);
  };

  return {
    email,
    password,
    errors,
    isSubmitting,
    submit,
    changeEmail,
    changePassword,
    goToResetPassword,
    goToRegister,
    passwordVisible: passwordVisibility.visible,
    togglePassword: passwordVisibility.toggle,
  };
}
