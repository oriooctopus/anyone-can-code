import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import theme from 'src/styles/chakraTheme';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
