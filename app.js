import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    hello(name: String!): String
  }
  type Mutation {
    createUser(name: String!): String
  }
`);

const root = {
  hello: ({ name }) => {
    return `Hello ${name} world!`;
  },
  createUser: ({ name }) => {
    console.log(`Your name is ${name}`);
    return name;
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => {
  console.log('Now browse to localhost:4000/graphql');
});
