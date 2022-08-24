import { makeExecutableSchema } from '@graphql-tools/schema';
import _ from 'lodash';

import { usersTypeDef } from './users/typeDef';
import { usersResolver } from './users/resolver';

import { hostelTypeDef } from './hostel/typeDef';
import { hostelResolver } from './hostel/resolver';

console.log('--== 2 resolvers ', _.merge(usersResolver, hostelResolver));
export const hostelMateSchema = makeExecutableSchema({
    typeDefs: [usersTypeDef, hostelTypeDef],
    resolvers: {
        Query: _.merge(usersResolver, hostelResolver)
    }
})