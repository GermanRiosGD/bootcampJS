import { Connection, In } from "typeorm";
import { AuthAPI } from "../controller/AuthAPI";
import { AuthorAPI } from "../controller/AuthorAPI";
import { CategoryAPI } from "../controller/CategoryAPI";
import { UserAPI } from "../controller/UserAPI";
import { PostAPI } from "../controller/PostAPI";
import { getConnection } from "../db";
import { Post } from "../schema/model/Post";


let connection: Connection;
let userAPI: UserAPI;
let authAPI: AuthAPI;
let authorAPI: AuthorAPI;
let categoryAPI: CategoryAPI;
let postAPI: PostAPI;

getConnection().then(conn => {
    connection = conn
    userAPI = new UserAPI(connection);
    authAPI = new AuthAPI(connection);
    authorAPI = new AuthorAPI(connection);
    categoryAPI = new CategoryAPI(connection);
    postAPI = new PostAPI(connection);

})

export const resolvers = {
    Query: {
        login: (_, { email, password }) => authAPI.getToken({ email, password }),
        users: (_, __, { token }) => authAPI.verifyToken(token)
            && userAPI.getUsers(),
        user: (_, { id }, { token }) => authAPI.verifyToken(token)
            && userAPI.getUser(id),
        authors:(_, __) =>  authorAPI.getAuthors(),
        author: (_, { id }) => authorAPI.getAuthor(id),
        categorys:(_, __) =>  categoryAPI.getCategorys(),
        category: (_, { id }) => categoryAPI.getCategory(id),
        posts:(_, __) =>  postAPI.getPosts(),
        post: (_, { id }) => postAPI.getPost(id),
        
    },
    Mutation: {
        saveUser: (_, { input }) => userAPI.saveUser({ ...input }),
        updateUser: (_, { id, input }, { token }) => authAPI.verifyToken(token)
            && userAPI.updateUser({ id, ...input }),
        deleteUser: (_, { id }, { token }) => authAPI.verifyToken(token)
            && userAPI.deleteUser(id),
        saveAuthor: (_, { input }) => authorAPI.saveAuthor({ ...input }),
        saveCategory: (_, { input }) => categoryAPI.saveCategory({ ...input }),
        savePost:(_, { input }) => postAPI.savePost({ ...input}),
        updatePost: (_, {id, input}) => postAPI.updatePost({ id, ...input }),
        deletePost: (_, { id }) => postAPI.updatePost(id)
    },
};