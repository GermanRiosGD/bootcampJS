import { gql } from "apollo-server";
import { User } from "./model/User";
import { Author } from "./model/Author";
import { Category } from "./model/Category";
import { Post } from "./model/Post";
import { Mutation } from "./operation/Mutation";
import { Query } from "./operation/Query";

export const typeDefs = gql`
    ${User}
    ${Post}
    ${Category}
    ${Author}
    ${Query}
    ${Mutation}
`