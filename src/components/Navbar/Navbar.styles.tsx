import React from 'react';
import { FlLink, IFlLinkProps } from '../Link/FlLink';

export const NavbarLink: React.FC<IFlLinkProps> = (props) => (
  <FlLink color="white" {...props} />
);
