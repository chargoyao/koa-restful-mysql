import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Ctx
} from 'routing-controllers';
import { Service } from 'typedi';
import { CTX } from '../interface';
import {UsersService} from "../services";

@Controller('/users')
@Service()
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    console.log(usersService);
  }
  @Get()
  getAll(@Ctx() ctx: CTX) {
    return 'return all';
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return 'geting this user'
  }

  @Post()
  post(@Body() user: any) {
    return {
      save: true,
      user
    }
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() user: any) {
    return {
      update: true,
      user,
      id,
    }
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return 'removing user...';
  }
}

