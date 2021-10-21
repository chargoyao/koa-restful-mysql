import Koa from 'koa';
import { DefaultState, DefaultContext, ParameterizedContext } from "koa";
import Router from 'koa-router';
import {connectDB} from './entities';
import 'colors';

const PORT = 3000;

const startApp = async () => {
  const app: Koa<DefaultState, DefaultContext> = new Koa();
  const router: Router = new Router();

  await connectDB(app);

  router.get('/', async(ctx: ParameterizedContext<DefaultState, DefaultContext>) => {
    ctx.body = {
      msg: 'hello world'
    }
  });

  app.use(router.routes()).use(router.allowedMethods())

  app.listen(PORT).on('listening', () => {
    console.log('server started');
  })
}

startApp();
