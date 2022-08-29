import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { settingsField } from './makeVar/settings';

export const cache = new InMemoryCache({
    typePolicies: {
        Settings: {
            fields: {
                settings: settingsField,
            }
        }
    }
});