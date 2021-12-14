import { Link, LinkProps } from '@chakra-ui/react';
import omit from 'lodash/omit';
import { Link as RouterLink } from 'react-router-dom';
import { isExternalURL } from 'src/utils/general';

export interface IFlLinkProps extends LinkProps {
  href?: string;
  // TODO: maybe we should just have consistent styling so that this isn't a manual prop
  underline?: boolean;
}

export const FlLink = ({ href, underline, ...linkProps }: IFlLinkProps) => {
  if (!href) {
    return (
      <Link
        as="button"
        textDecoration={underline && 'underline'}
        href={href}
        {...omit(linkProps, 'ref')}
      />
    );
  }

  return isExternalURL(href) ? (
    <Link href={href} {...linkProps} />
  ) : (
    <RouterLink to={href}>
      <Link {...linkProps} />
    </RouterLink>
  );
};
