import Koa from 'koa';
import { DefaultState, DefaultContext, ParameterizedContext } from "koa";
import Router from 'koa-router';
import './entities';
import 'colors';

const PORT = 3000;

const app: Koa<DefaultState, DefaultContext> = new Koa();
const router: Router = new Router();

router.get('/', async(ctx: ParameterizedContext<DefaultState, DefaultContext>) => {
  ctx.body = {
    msg: 'hello world'
  }
});

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT).on('listening', () => {
  console.log('server started');
})
