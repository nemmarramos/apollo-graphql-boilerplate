import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';
import GraphQLJSON from 'graphql-type-json';

import userType from './app/graphql/types/user';
import userResolver from './app/graphql/resolvers/user';

const jsonResolver = {
  JSON: GraphQLJSON
};

const jsonType = 'scalar JSON';

const typeDefs = mergeTypes([jsonType, userType]);
const resolvers = mergeResolvers([jsonResolver, userResolver]);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const PORT = 3000;

const app = express().use('*', cors());
app.enable('trust proxy');

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

if(process.env.NODE_ENV !== 'production') {
  app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
}

console.log(`Now listening to port ${PORT}`);
app.listen(PORT);
