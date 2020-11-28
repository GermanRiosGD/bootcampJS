import { gql } from "@apollo/client";

export const LOGIN = gql`
    query Login($email:String!, $password:String!){
    login(email: $email, password:$password)
    }
`
export const POSTS = gql`
query GetPosts {
    posts {
      title
      body
    }
  }
`