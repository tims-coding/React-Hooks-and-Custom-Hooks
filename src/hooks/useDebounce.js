import { useCallback } from "react";

const debounce = (func) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 500);
  };
};

const useDebounce = (func) => useCallback(debounce(func), []);
export default useDebounce;