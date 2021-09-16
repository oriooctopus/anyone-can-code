import React from 'react';
import { useLinkStyles } from './FlLink.styles';
import NextLink from 'next/link';
import clsx from 'clsx';
import { IFlLinkProps } from './FlLink.types';
import { FlText } from '../Typography/FlText';

export const FlLink: React.FC<IFlLinkProps> = ({
  className,
  children,
  variant = 'linkBody',
  ...otherProps
}) => {
  const linkStyles = useLinkStyles();

  return (
    <NextLink {...otherProps}>
      <FlText className={clsx(className, linkStyles)} variant={variant}>
        {children}
      </FlText>
    </NextLink>
  );
};
