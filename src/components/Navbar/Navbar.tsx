import { memo } from 'react';
import { Box, HStack } from '@chakra-ui/layout';
import { NavbarLink } from './Navbar.styles';
import { rem } from 'src/styles/typography/font';

const Navbar = memo(() => (
  <Box as="nav" backgroundColor="#15141f" p={rem(20)}>
    <HStack spacing={6}>
      <NavbarLink href="#">Map</NavbarLink>
      <NavbarLink href="#">Goals</NavbarLink>
      <NavbarLink href="#">Lexicon</NavbarLink>
    </HStack>
  </Box>
));

export default Navbar;
