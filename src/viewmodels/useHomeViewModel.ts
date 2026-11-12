import { router } from 'expo-router';
import type { Href } from 'expo-router';

import { ROUTES } from '../config/routes';

export function useHomeViewModel() {
  const goToLogin = () => {
    router.push(ROUTES.login as Href);
  };

  return { goToLogin };
}
