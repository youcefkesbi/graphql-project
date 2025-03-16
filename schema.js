export const typeDefs = `#graphql
    type Game {
        id: ID!,
        title: String,
        platform: [String]
    }
    type Review {
        id: ID!,
        rating: Int!,
        content: String!
    }
`;
