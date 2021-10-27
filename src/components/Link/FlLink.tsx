import { Link } from '@chakra-ui/react';
import omit from 'lodash/omit';
import { Link as RouterLink } from 'react-router-dom';
import { isExternalURL } from 'src/utils/general';

export interface IFlLinkProps extends React.ComponentProps<'a'> {}

export const FlLink: React.FC<IFlLinkProps> = ({ href, ...props }) => {
  if (!href) {
    return <Link as="button" href="ewf" {...omit(props, 'ref')} />;
  }

  return isExternalURL(href) ? (
    <Link href={href} {...props} />
  ) : (
    <RouterLink to={href}>
      <Link {...props} />
    </RouterLink>
  );
};
