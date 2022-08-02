import { createServer } from '@graphql-yoga/node'
import { hostelMateSchema } from '../../lib/graphql/schema'



const server = createServer({
    schema: hostelMateSchema,
    endpoint: '/api/graphql',
    // graphiql: false // uncomment to disable GraphiQL
})

export default server