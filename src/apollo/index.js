import { ApolloClient, HttpLink } from '@apollo/client';
import { cache } from './cache';


export const apolloClientEntity = new ApolloClient({
    cache: cache,
    link: new HttpLink({
        uri: process.env.GRAPHQL_URL || 'https://hostelmate.vercel.app/api/graphql',
    }),
    ssrMode: typeof window === 'undefined',
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
            errorPolicy: 'ignore',
        },
        query: {
            fetchPolicy: 'cache-and-network',
            errorPolicy: 'all',
        },
        mutate: {
            errorPolicy: 'all',
        },
    },
});

