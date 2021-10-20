import Koa from 'koa';
import { DefaultState, DefaultContext, ParameterizedContext } from "koa";
// import { createConnect, Connection } from 'typeorm';
import { config } from 'dotenv';
import 'colors';
config();

const { DB_HOST, DB_USER, DB_PASS } = process.env;
console.log({ DB_HOST, DB_USER, DB_PASS});
