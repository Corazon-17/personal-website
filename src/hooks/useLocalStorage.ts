import { useState } from "react";

export function useLocalStorage(key: string, initValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initValue;
    } catch {
      return initValue;
    }
  });

  const setValue = (value: any) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  return [storedValue, setValue];
}
