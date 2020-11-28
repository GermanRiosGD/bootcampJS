import { Connection } from "typeorm";
import { Category } from "../entity/Category";
import { Post } from "../entity/Post";

export class CategoryAPI {
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }
    async getCategorys(): Promise<Array<ICategory>> {
        return await this.connection.manager.find(Category)
    }
    async getCategory(id: number): Promise<ICategory> {
        return await this.connection.manager.findOne(Category, {
            where: { id },
        });
    }
    async saveCategory(category: ICategory): Promise<ICategory> {
        return await this.connection.manager.save(Category, category);
    }
    async updateCategory(category: ICategory): Promise<ICategory> {
        let currentCategory = await this.getCategory(category.id)
        Object.keys(category).forEach(key =>
            category[key] === undefined && delete category[key]
        )
        currentCategory = { ...currentCategory, ...category }

        return await this.connection.manager.save(Category, currentCategory)
    }

    async daleteCategory(id: number): Promise<ICategory> {
        let currentCategory = await this.getCategory(id)
        return await this.connection.manager.remove(currentCategory)
    }
}

interface ICategory {
    id?: number;
    label?: string;
    desc?: string;
    slug: string;
    post: Post;
}