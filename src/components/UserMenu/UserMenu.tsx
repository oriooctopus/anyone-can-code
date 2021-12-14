import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BiUserCircle } from 'react-icons/bi';
import { useLogout } from 'src/state/authentication/authentication';

export const UserMenu = () => {
  const logout = useLogout();
  // TODO: fix icon buttons so that they have correct hover styles
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<BiUserCircle size={26} color="white" />}
        aria-label="User Menu"
        variant="unstyled"
      />
      <MenuList>
        <MenuItem onClick={logout}>Log out</MenuItem>
      </MenuList>
    </Menu>
  );
};
