import { FlLink, IFlLinkProps } from '../Link/FlLink';
import React from 'react';

export const NavbarLink: React.FC<IFlLinkProps> = (props) => (
  <FlLink color="white" {...props} />
);
