import { hash } from "bcrypt";
import { userInfo } from "os";
import { Connection } from "typeorm";
import { Author } from "../entity/Author";
import { Post } from "../entity/Post";

export class AuthorAPI {
    private readonly SALT_ROUNDS = 9;
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }
    async getAuthors(): Promise<Array<IAuthor>> {
        return await this.connection.manager.find(Author)
    }
    async getAuthor(id: number): Promise<IAuthor> {
        return await this.connection.manager.findOne(Author, {
            where: { id },
        });
    }
    async updateAuthor(author: IAuthor): Promise<IAuthor> {
        let currentAuthor = await this.getAuthor(author.id)
        Object.keys(author).forEach(key =>
            author[key] === undefined && delete author[key]
        )
        currentAuthor = { ...currentAuthor, ...author }

        return await this.connection.manager.save(Author, currentAuthor)
    }

    async daleteAuthor(id: number): Promise<IAuthor> {
        let currentAuthor = await this.getAuthor(id)
        return await this.connection.manager.remove(currentAuthor)
    }
}

interface IAuthor {
    id?: number;
    name?: string;
    lastName?: string;
    email: string;
    post: Array<Post>;
}