import { ApolloServer } from '@apollo/server';
import { typeDefs } from './schema';
import resolvers from './resolvers';
import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

export const graphqlHandler = startServerAndCreateLambdaHandler(
    server,
    // We will be using the Proxy V2 handler
    handlers.createAPIGatewayProxyEventV2RequestHandler(),
);