import { useContext } from 'react';
import { CourseMapOverlay } from 'components/SidebarOverlays/CourseMapOverlay/CourseMapOverlay';
import { SidebarOverlayContext } from 'components/SidebarOverlays/SidebarOverlayContext';

export const useGetSidebarOverlay = () => {
  const { overlayState } = useSidebarOverlayContext();

  switch (overlayState) {
    case 'module-map':
      return CourseMapOverlay;
    default:
      return undefined;
  }
};

export const useSidebarOverlayContext = () => {
  const overlayContext = useContext(SidebarOverlayContext);

  if (!overlayContext) {
    throw new Error(
      'Please wrap the component in a SidebarOverlayContext provider',
    );
  }

  return overlayContext;
};
