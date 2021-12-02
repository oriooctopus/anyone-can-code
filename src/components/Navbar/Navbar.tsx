import { NavbarLink } from './Navbar.styles';
import { Flex, HStack } from '@chakra-ui/layout';
import { memo } from 'react';
import { mainNavbarHeight } from 'src/styles/constants';
import { rem } from 'src/styles/typography/font';
import { useSidebarOverlayContext } from 'components/SidebarOverlays/SidebarOverlay.utils';

export const Navbar = memo(() => {
  const { setOverlayState } = useSidebarOverlayContext();

  return (
    <Flex
      as="nav"
      // backgroundColor="#15141f"
      color="white"
      px={rem(20)}
      height={rem(mainNavbarHeight)}
      alignItems="center"
    >
      <HStack spacing={6}>
        <NavbarLink onClick={() => setOverlayState('module-map')}>
          Map
        </NavbarLink>
      </HStack>
    </Flex>
  );
});

Navbar.displayName = 'Navbar';
