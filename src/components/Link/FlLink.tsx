import { Link, LinkProps } from '@chakra-ui/react';
import omit from 'lodash/omit';
import { Link as RouterLink } from 'react-router-dom';
import { isExternalURL } from 'src/utils/general';

export interface IFlLinkProps extends LinkProps {
  href?: string;
}

export const FlLink: React.FC<IFlLinkProps> = ({ href, ...linkProps }) => {
  if (!href) {
    return <Link as="button" href="ewf" {...omit(linkProps, 'ref')} />;
  }

  return isExternalURL(href) ? (
    <Link href={href} {...linkProps} />
  ) : (
    <RouterLink to={href}>
      <Link {...linkProps} />
    </RouterLink>
  );
};
