import { useState } from 'react';

export function usePasswordVisibility(initiallyVisible = false) {
  const [visible, setVisible] = useState(initiallyVisible);

  const toggle = () => {
    setVisible((current) => !current);
  };

  return {
    visible,
    toggle,
    secureTextEntry: !visible,
  };
}
