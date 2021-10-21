import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete
} from 'routing-controllers';

@Controller('/users')
export class UsersController {
  @Get()
  getAll() {
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

