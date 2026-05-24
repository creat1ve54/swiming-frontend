import { useRef } from "react";

export function useDebounced(callback, delay = 1000) {
  const time = useRef();

  return (...args) => {
    clearTimeout(time.current);
    time.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
