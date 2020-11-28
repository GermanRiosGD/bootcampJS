import { Connection } from "typeorm";
import { Author } from "../entity/Author";
import { Category } from "../entity/Category";
import { Post } from "../entity/Post";

export class AuthorAPI {
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }
    async getPosts(): Promise<Array<Ipost>> {
        return await this.connection.manager.find(Post)
    }
    async getPost(id: number): Promise<Ipost> {
        return await this.connection.manager.findOne(Post, {
            where: { id },
        });
    }
    async updatePost(post: Ipost): Promise<Ipost> {
        let currentPost = await this.getPost(post.id)
        Object.keys(post).forEach(key =>
            post[key] === undefined && delete post[key]
        )
        currentPost = { ...currentPost, ...post }

        return await this.connection.manager.save(Post, currentPost)
    }

    async deletePost(id: number): Promise<Ipost> {
        let currentPost = await this.getPost(id)
        return await this.connection.manager.remove(currentPost)
    }
}

interface Ipost {
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