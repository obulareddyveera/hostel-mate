

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

// Used server and client side - can't use react hooks
export const apolloClientEntity = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.GRAPHQL_URL || 'https://hostelmate.vercel.app/api/graphql',
  }),
  ssrMode: typeof window === 'undefined',
});

