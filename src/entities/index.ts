import Koa from 'koa';
import { DefaultState, DefaultContext, ParameterizedContext } from "koa";
import { createConnection, Connection } from 'typeorm';
import { Photo } from './photo';
import { config } from 'dotenv';
import 'colors';
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
      entities: [Photo],
      synchronize: true,
      logging: false
    });

    let photo = new Photo();
    photo.name = '姚东';
    photo.description = 'jack';
    photo.filename = '2333.jpg';
    photo.views = 1;
    photo.isPublished = true;

    const result = await connection.manager.save(photo)
    console.log('photo has been saved,id', result.id);

    app.context.db = connection;
    console.log('connect db successfully!');
  } catch (e) {
      console.error('failed use mysql', e);
  }
}
