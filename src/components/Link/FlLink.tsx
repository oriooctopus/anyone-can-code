import React from 'react';
import { useLinkStyles } from './FlLink.styles';
import NextLink from 'next/link';
import clsx from 'clsx';
import { IFlLinkProps } from './FlLink.types';
import { FlText } from '../Typography/FlText';
import { isExternalURL } from 'src/utils/general';

export const FlLink: React.FC<IFlLinkProps> = ({ href, ...props }) => {
  console.log('supplied href', href);
  return isExternalURL(href) ? (
    <a href={href} {...props} />
  ) : (
    <NextLink href={href} {...props} />
  );
};
