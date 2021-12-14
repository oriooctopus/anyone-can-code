import { NavbarLink } from './Navbar.styles';
import { Flex, HStack } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import { memo } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { mainNavbarHeight } from 'src/styles/constants';
import { rem } from 'src/styles/typography/font';
import { useSidebarOverlayContext } from 'components/SidebarOverlays/SidebarOverlay.utils';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navbar = memo(() => {
  const { setOverlayState } = useSidebarOverlayContext();

  return (
    <Flex
      as="nav"
      pl={rem(20)}
      height={rem(mainNavbarHeight)}
      alignItems="center"
    >
      <HStack spacing={6} color="white">
        <NavbarLink onClick={() => setOverlayState('module-map')}>
          Map
        </NavbarLink>
      </HStack>
      <HStack marginLeft="auto" spacing={5}>
        <UserMenu />
      </HStack>
    </Flex>
  );
});

Navbar.displayName = 'Navbar';
