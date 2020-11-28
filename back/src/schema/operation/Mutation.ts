const { gql } = require("apollo-server");

export const Mutation = gql`
  type Mutation {
    saveUser(input: UserInput!): User
    updateUser(id: Int!, input: UserInput!): User
    deleteUser(id: Int!): User
    saveAuthor(input: AuthorInput!): Author
    saveCategory(input: CategoryInput!): Category
    savePost(input: PostInput!): Post
    updatePost(id: Int!, input: PostInput!): Post
    deletePost(id: Int!): Post
  }
`;