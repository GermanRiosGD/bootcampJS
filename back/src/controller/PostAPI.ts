import { Connection } from "typeorm";
import { Author } from "../entity/Author";
import { Category } from "../entity/Category";
import { Post } from "../entity/Post";
import { AuthorAPI } from "./AuthorAPI";
import { CategoryAPI } from "./CategoryAPI";

export class PostAPI {
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }
    async getPosts(): Promise<Array<IPost>> {
        return await this.connection.manager.find(Post)
    }
    async getPost(id: number): Promise<IPost> {
        return await this.connection.manager.findOne(Post, {
            where: { id },
        });
    }
    async savePost(post: IPost): Promise<IPost> {
        const currentAuthor = await this.connection.manager.findOne(Author, {
            where: {
                name: post.author.name,
                lastName: post.author.lastName,
                email: post.author.email
            }
        })
        const currentCategorys = []
        for (let index = 0; index < post.category.length; index++) {
            const currentCategory = await this.connection.manager.findOne(Category, {
                where: {
                    label: post.category[index].label,
                    desc: post.category[index].desc,
                    slug: post.category[index].slug
                }
            })
            currentCategorys.push(currentCategory);
        }
        post.author = currentAuthor
        post.category = currentCategorys
        return await this.connection.manager.save(Post, post);
    }
    async updatePost(post: IPost): Promise<IPost> {
        let currentPost = await this.getPost(post.id)
        Object.keys(post).forEach(key =>
            post[key] === undefined && delete post[key]
        )
        currentPost = { ...currentPost, ...post }

        return await this.connection.manager.save(Post, currentPost)
    }

    async deletePost(id: number): Promise<IPost> {
        let currentPost = await this.getPost(id)
        return await this.connection.manager.remove(currentPost)
    }
}

interface IPost {
    id?: number;
    title?: string;
    body?: string;
    slug: string;
    date:  string;
    coverImg: string;
    cardImg: string;
    author: Author;
    category: Array<Category>;
}