import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/ckrdnv1hq15w701we3v72cga9/master',
  cache: new InMemoryCache(),
});

export default client;
