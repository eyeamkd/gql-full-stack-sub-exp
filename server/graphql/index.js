const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    type Post{ 
        id:ID!,
        title:String!,
        description:String
    }
`; 

const resolvers =  { 
    
}
