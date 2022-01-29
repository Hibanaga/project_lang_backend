import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { random } from 'lodash';
import { User } from './model/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get()
  getAll() {
    return this._userService.getAll();
  }

  @Get("me")
  get(@Query() request): Promise<User> {
    return this._userService.getMe(request);
  }

  @Post()
  post(@Body() request): Promise<User> {
    console.log(request);
    const defaultUser = {
      ...request,
      isActive: false,
      code: random(1111, 9999),
    };
    return this._userService.create(defaultUser);
  }

  @Put()
  updateIsActive(@Body() request): Promise<User> {
    return this._userService.update(request);
  }
}
