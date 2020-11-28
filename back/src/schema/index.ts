import { gql } from "apollo-server";
import { User } from "./model/User";
import { Mutation } from "./operation/Mutation";
import { Query } from "./operation/Query";

export const typeDefs = gql`
    ${User}
    ${Query}
    ${Mutation}
`