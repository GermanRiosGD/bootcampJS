import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  label: string;
  @Column()
  desc: string;
  @Column()
  slug: string;
  @ManyToOne(() => Post, post => post.category)
  post: Post;
}