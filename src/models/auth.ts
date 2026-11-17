import type { Gender } from '../types/auth';

export interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
  gender?: Gender;
}

export interface AuthSession {
  token: string;
  user: User;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm extends LoginForm {
  name: string;
  age: string;
  gender: string;
  confirmation: string;
}

export interface ResetPasswordForm {
  email: string;
}
