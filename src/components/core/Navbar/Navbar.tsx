import { HStack } from 'components/core/Stacks/HStack';
import { Nav, NavbarLink } from './Navbar.styles';

const Navbar = () => (
  <Nav>
    <HStack spacing="large">
      <NavbarLink href="#">Map</NavbarLink>
      <NavbarLink href="#">Goals</NavbarLink>
      <NavbarLink href="#">Lexicon</NavbarLink>
    </HStack>
  </Nav>
);

export default Navbar;
