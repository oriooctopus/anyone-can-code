import { decodeBase64String, encodeToBase64String } from 'src/utils/general';

/**
 * Safely returns the local storage object. In browser, it gets the window
 * local storage. In test (i.e. node), return a polyfill
 */
export const getLocalStorage = (): Storage => {
  // If we're testing, use a local storage polyfill
  if (process.env.NODE_ENV === 'test' || typeof window === 'undefined') {
    return require('localStorage');
  }
  // If not, use the browser one
  return window.localStorage;
};

/**
 * Stores a compressed value in local storage
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setLocalStorageValue = (key: string, value: any) => {
  getLocalStorage().setItem(key, encodeToBase64String(value));
};

/**
 * Retrieves a compressed value from local storage
 */
export const getLocalStorageValue = (key: string) => {
  return null;
  if (typeof window === 'undefined') {
  }

  const hashedValue = getLocalStorage().getItem(key);
  if (hashedValue) {
    try {
      return decodeBase64String(hashedValue);
    } catch {
      return null;
    }
  }
  return null;
};

/**
 * Removes a value from local storage
 */
export const removeLocalStorageValue = (key: string) => {
  getLocalStorage().removeItem(key);
};
