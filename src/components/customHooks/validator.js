import { useState } from 'react';

export const usePasswordVisible = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prev) => !prev);
  }
  return { isPasswordVisible, togglePasswordVisibility };
};
