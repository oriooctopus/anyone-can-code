import React from 'react';
import styled from '@emotion/styled';
import { rem } from 'src/styles/typography/font';
import { FlLink } from '../Link/FlLink';
import { IFlNavLinkProps } from './FlNavbar.types';

export const NavTest = styled.nav({
  backgroundColor: '#15141f',
  padding: rem(20),
});

const NavbarLinkStyled = styled(FlLink)`
  color: white;
`;

export const NavbarLink: React.FC<IFlNavLinkProps> = (props) => (
  <NavbarLinkStyled variant="navLink" {...props} />
);
