import { NextPage } from 'next';
import { resolvers } from '../resolvers';

import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import {
  NextApiRequestCookies,
  // @ts-ignore This path is generated at build time and conflicts otherwise
} from 'next-server/server/api-utils';
import { IncomingMessage } from 'http';

export type ApolloClientContext = {
  req?: IncomingMessage & {
    cookies: NextApiRequestCookies;
  };
};

export const withApollo = (Comp: NextPage) => (props: any) => {
  return (
    <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
      <Comp />
    </ApolloProvider>
  );
};

export const getApolloClient = (
  ctx?: ApolloClientContext,
  initialState?: NormalizedCacheObject,
) => {
  if (ctx && ctx.req) {
    let { req } = ctx;
    // Do something with the cookies here, maybe add a header for authentication
    req.cookies;
  }

  const httpLink = createHttpLink({
    uri: 'https://api-us-west-2.graphcms.com/v2/ckrdnv1hq15w701we3v72cga9/master',
    fetch,
  });
  console.log('initial state', initialState);
  const cache = new InMemoryCache().restore(
    initialState || {
      editor: {
        code: 'abcd',
      },
    },
  );
  console.log('yo this does happen right?', cache);
  return new ApolloClient({
    resolvers,
    cache,
    // typeDefs,
    link: httpLink,
  });
};
