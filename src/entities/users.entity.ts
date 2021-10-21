import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SharedProp } from './sharedProp.entity';
import { PostEntity } from "./post.entity";

export type UserType = 'admin' | 'user';

@Entity({name: 'users'})
export class Users extends SharedProp {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'first_name', nullable: false})
  firstName!: string;

  @Column({name: 'last_name', nullable: false})
  lastName!: string;

  @Column({name: 'birth_of_date', nullable: false, type: 'date'})
  birthOfDate!: string;

  @Column({unique: true, nullable: false})
  email!: string;

  @Column({default: 'user'})
  type!: UserType;

  @Column({nullable: false})
  password!: string;

  @Column({ nullable: false })
  salt!: string;

  @OneToMany(() => PostEntity, (post: PostEntity) => post.user, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  posts!: Array<PostEntity>

  accessToken?: string
}
