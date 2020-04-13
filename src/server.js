require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const schema = require('./schema');
const resolvers = require('./resolvers');
const models = require('./models');

const app = express();
const port = 3000;

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
    me: models.users[1],
  },
  playground: process.env.NODE_ENV === 'development',
});

server.applyMiddleware({ app, path: '/' });

app.listen(port, () => console.log('GraphQL server running on localhost:3000'));
