import Koa from 'koa';
import { DefaultState, DefaultContext, ParameterizedContext } from "koa";
import { UsersController } from './controllers';
import { createKoaServer } from 'routing-controllers';
import {connectDB} from './entities';
import 'colors';

const PORT = 3000;

const startApp = async () => {
  const app: Koa<DefaultState, DefaultContext> = createKoaServer({
    controllers: [UsersController]
  });

  await connectDB(app);


  app.listen(PORT).on('listening', () => {
    console.log('server started');
  })
}

startApp();
