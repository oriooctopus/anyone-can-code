import { useEffect } from 'react';

export const useDebounced = (
  effect: () => void,
  deps: Array<unknown>,
  delay: number,
) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
  }, [...(deps || []), delay]);
};
