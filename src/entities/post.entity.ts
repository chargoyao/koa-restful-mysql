import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { SharedProp } from "./sharedProp.entity";
import { Users } from './users.entity';

@Entity({ name: 'posts' })
export class PostEntity extends SharedProp {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ type: 'text' })
  body!: string;

  @Column({ nullable: false, name: 'user_id' })
  userId!: number;

  @ManyToOne(() => Users, (user: Users) => user.posts)
  @JoinColumn({ name: 'user_id' })
  user!: Users
}
