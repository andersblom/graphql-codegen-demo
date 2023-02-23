import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        greeting: String!
        farewell: String!
    }
`;

const resolvers = {
    Query: {
        greeting: () => "Hello Unity",
        farewell: () => "See you next time!"
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const appPort = 3001;

server.listen(appPort).then(() => {
    console.log(`
        🚀  Server is running!
        🔉  Listening on port ${appPort}
        📭  Query at http://localhost:${appPort}
    `);
});
