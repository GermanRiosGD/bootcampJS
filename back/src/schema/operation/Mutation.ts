const { gql } = require("apollo-server");

export const Mutation = gql`
  type Mutation {
    saveUser(input: UserInput!): User
    updateUser(id: Int!, input: UserInput!): User
    deleteUser(id: Int!): User
  }
`;