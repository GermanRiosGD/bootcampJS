const { gql } = require("apollo-server");

export const Query = gql`
  type Query {
    login(email:String!, password:String!): String
    users: [User]
    user(id:Int!): User
  }
`;
