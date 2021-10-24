import { NavbarLink } from './Navbar.styles';
import { Flex, HStack } from '@chakra-ui/layout';
import { memo } from 'react';
import { mainNavbarHeight } from 'src/styles/constants';
import { rem } from 'src/styles/typography/font';

const Navbar = memo(() => (
  <Flex
    as="nav"
    backgroundColor="#15141f"
    color="white"
    px={rem(20)}
    height={rem(mainNavbarHeight)}
    alignItems="center"
  >
    <HStack spacing={6}>
      <NavbarLink href="#">Map</NavbarLink>
      <NavbarLink href="#">Goals</NavbarLink>
      <NavbarLink href="#">Lexicon</NavbarLink>
    </HStack>
  </Flex>
));

export default Navbar;
