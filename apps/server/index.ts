import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        greeting: String!
    }
`;


const server = new ApolloServer({
    typeDefs,
    mocks: true
});

const appPort = 3001;

server.listen(appPort).then(() => {
    console.log(`
        🚀  Server is running!
        🔉  Listening on port ${appPort}
        📭  Query at http://localhost:${appPort}
    `);
});
