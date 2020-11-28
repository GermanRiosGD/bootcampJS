const { gql } = require("apollo-server")

export const Author = gql`
    type Author {
        id: Int
        name: String
        lastName: String
        email: String
        post: [Post]
    }
    input AuthorInput {
        name: String
        lastName: String
        email: String
    }
`