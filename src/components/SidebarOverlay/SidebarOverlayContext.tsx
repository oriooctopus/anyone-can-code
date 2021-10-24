import { createContext } from 'react';

export type TSidebarOverlayState =
  | 'debug-handbook'
  | 'module-map'
  | 'syntax-handbook'
  | null;

interface ISidebarOverlayContextProps {
  overlayState: TSidebarOverlayState;
  setOverlayState: (state: TSidebarOverlayState) => void;
}

export const SidebarOverlayContext =
  createContext<ISidebarOverlayContextProps | null>(null);
