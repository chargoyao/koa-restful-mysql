import Koa from 'koa';
import { DefaultState, DefaultContext } from "koa";
import { UsersController } from './controllers';
import { createKoaServer, useContainer } from 'routing-controllers';
import {connectDB} from './entities';
import {services } from './services';
import { Container } from 'typedi';
import 'colors';

const PORT = 3000;

const startApp = async () => {
  const app: Koa<DefaultState, DefaultContext> = createKoaServer({
    controllers: [UsersController]
  });

  await connectDB(app);
  useContainer(Container);
  services.forEach((service: any) => {
    Container.set(service, new service(app.context.db));
  });


  app.listen(PORT).on('listening', () => {
    console.log('server started');
  })
}

startApp();
