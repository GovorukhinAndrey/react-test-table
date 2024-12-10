import { useEffect, useMemo, useRef } from "react";
import _debounce from "lodash/debounce";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounce = (callback: any) => {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return _debounce(func, 500);
  }, []);

  return debouncedCallback;
};
