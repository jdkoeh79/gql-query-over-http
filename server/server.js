const { ApolloServer, gql } = require("apollo-server");

const gqlTypes = gql`
  type Query {
    greeting: String
  }
`;

const myResolvers = {
  Query: {
    greeting: () => "Hello World!"
  }
};

const server = new ApolloServer({
  typeDefs: gqlTypes,
  resolvers: myResolvers
});

server
  .listen({ port: 9000 })
  .then(({ url }) => console.log(`Server running at ${url}`));
