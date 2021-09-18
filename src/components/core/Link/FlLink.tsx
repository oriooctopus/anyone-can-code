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
  const linkStyles = useLinkStyles;

  // const title = css`
  //   font-size: 118px;
  //   font-weight: bold;
  // `;

  console.log('rir', className);

  return (
    <NextLink {...otherProps}>
      <FlText className={clsx(className)} variant={variant} css={linkStyles}>
        {children}
      </FlText>
    </NextLink>
  );
};
