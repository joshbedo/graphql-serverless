const typeDefs = `#graphql
    type Query {
        hello: String
        users: [User]
    }


    type User {
        id: ID!
        name: String
        email: String
    }
`;

export { typeDefs };