import { router } from 'expo-router';
import type { Href } from 'expo-router';
import { useState } from 'react';

import { ROUTES } from '../config/routes';
import { useToggle } from '../hooks/useToggle';
import { onlyDigits } from '../lib/digits';
import { validate } from '../lib/validation';
import type { RegisterForm } from '../models/auth';
import { registerSchema } from '../schemas/auth.schema';
import { authService, AuthError } from '../services/auth.service';
import type { FieldErrors } from '../types/forms';

export function useRegisterViewModel() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [errors, setErrors] = useState<FieldErrors<RegisterForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const genderMenu = useToggle();

  const clearError = (field: keyof RegisterForm) => {
    setErrors((current) => {
      if (current[field] === undefined) {
        return current;
      }

      return { ...current, [field]: undefined };
    });
  };

  const changeName = (value: string) => {
    setName(value);
    clearError('name');
  };

  const changeAge = (value: string) => {
    setAge(onlyDigits(value, 3));
    clearError('age');
  };

  const changeGender = (value: string) => {
    setGender(value);
    clearError('gender');
  };

  const changeEmail = (value: string) => {
    setEmail(value);
    clearError('email');
  };

  const changePassword = (value: string) => {
    setPassword(value);
    clearError('password');
  };

  const changeConfirmation = (value: string) => {
    setConfirmation(value);
    clearError('confirmation');
  };

  const selectGender = (value: string) => {
    changeGender(value);
    genderMenu.close();
  };

  const submit = async () => {
    const result = validate(registerSchema, {
      name,
      age,
      gender,
      email,
      password,
      confirmation,
    });

    if (!result.success) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await authService.register({ name, age, gender, email, password, confirmation });
      router.replace(ROUTES.login as Href);
    } catch (error) {
      if (error instanceof AuthError) {
        setErrors(error.fieldErrors as FieldErrors<RegisterForm>);
      } else {
        setErrors({ form: 'Não foi possível concluir o cadastro' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    router.back();
  };

  return {
    name,
    age,
    gender,
    email,
    password,
    confirmation,
    errors,
    isSubmitting,
    isGenderOpen: genderMenu.isOpen,
    submit,
    changeName,
    changeAge,
    changeGender,
    changeEmail,
    changePassword,
    changeConfirmation,
    selectGender,
    toggleGender: genderMenu.toggle,
    closeGender: genderMenu.close,
    goBack,
  };
}
