import { Connection } from "typeorm";
import { AuthAPI } from "../controller/AuthAPI";
import { UserAPI } from "../controller/UserAPI";
import { getConnection } from "../db";


let connection: Connection;
let userAPI: UserAPI;
let authAPI: AuthAPI;
getConnection().then(conn => {
    connection = conn
    userAPI = new UserAPI(connection);
    authAPI = new AuthAPI(connection);
})

export const resolvers = {
    Query: {
        login: (_, { email, password }) => authAPI.getToken({ email, password }),
        users: (_, __, { token }) => authAPI.verifyToken(token)
            && userAPI.getUsers(),
        user: (_, { id }, { token }) => authAPI.verifyToken(token)
            && userAPI.getUser(id),
    },
    Mutation: {
        saveUser: (_, { input }) => userAPI.saveUser({ ...input }),
        updateUser: (_, { id, input }, { token }) => authAPI.verifyToken(token)
            && userAPI.updateUser({ id, ...input }),
        deleteUser: (_, { id }, { token }) => authAPI.verifyToken(token)
            && userAPI.deleteUser(id),
    },
};