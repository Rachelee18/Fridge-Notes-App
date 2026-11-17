export const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  resetPassword: '/reset-password',
  notes: '/notes',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
