import { makeExecutableSchema } from '@graphql-tools/schema';
import _ from 'lodash';

import { postsTypeDef } from './posts/typeDef';
import { postsResolver } from './posts/resolver';

import { usersTypeDef } from './users/typeDef';
import { usersResolver } from './users/resolver';

export const hostelMateSchema = makeExecutableSchema({
    typeDefs: [usersTypeDef],
    resolvers: _.merge(usersResolver)
})