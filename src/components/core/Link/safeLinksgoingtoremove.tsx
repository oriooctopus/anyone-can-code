import { FC } from 'react';
import NextLink from 'next/link';

// lazily did this. Will improve later
const buttonBase = (props) => <button {...props} />;

// https://developers.google.com/web/tools/lighthouse/audits/noopener
export const safeLinkHoc = <
  TProps extends { readonly target?: string; readonly rel?: string } & object,
>(
  ComponentToWrap: React.ComponentType<TProps>,
) => {
  const wrappedComponent: FC<HTMLElement & TProps> = (props) => {
    const injectedProps: TProps = Object.assign({}, props, {
      rel:
        props.rel ||
        (props.target === '_blank' ? 'noopener noreferrer' : undefined),
    });
    return <ComponentToWrap {...injectedProps} />;
  };
  return wrappedComponent;
};

export const SafeNavLink = safeLinkHoc(NextLink);
export const SafeMuiButton = safeLinkHoc(buttonBase);
