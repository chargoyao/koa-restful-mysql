import Koa from 'koa';
import { DefaultState, DefaultContext, ParameterizedContext } from 'koa';
import { createConnection, Connection } from 'typeorm';
import { PostEntity } from './post.entity';
import { Users } from './users.entity';
import { config } from 'dotenv';
import 'colors';
import 'reflect-metadata';
config();

const { DB_HOST, DB_USER, DB_PASS } = process.env;

export const connectDB = async (app: Koa<DefaultState, DefaultContext>) => {
  try {
    const connection = await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'chargo',
      entities: [PostEntity, Users],
      synchronize: true,
      logging: false,
    });

    app.context.db = connection;
    console.log('connect db successfully!');
  } catch (e) {
    console.error('failed use mysql', e);
  }
};
