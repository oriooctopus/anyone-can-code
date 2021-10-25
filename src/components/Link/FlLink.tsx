import { Link } from 'react-router-dom';
import { isExternalURL } from 'src/utils/general';

export interface IFlLinkProps extends React.ComponentProps<'a'> {
  href: string;
}

export const FlLink: React.FC<IFlLinkProps> = ({ href, ...props }) =>
  isExternalURL(href) ? (
    <a href={href} {...props} />
  ) : (
    <Link to={href}>
      <a {...props} />
    </Link>
  );
