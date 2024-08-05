import { useEffect, useState } from "react";

export const useDebounce = (value, wait) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, wait);

    return () => clearInterval(timer);
  }, [value, wait]);

  return debouncedValue;
};
