import NextLink from 'next/link';
import { isExternalURL } from 'src/utils/general';

export interface IFlLinkProps extends React.ComponentProps<'a'> {}

export const FlLink: React.FC<IFlLinkProps> = ({ href, ...props }) =>
  isExternalURL(href) ? (
    <a href={href} {...props} />
  ) : (
    <NextLink href={href} {...props} />
  );
