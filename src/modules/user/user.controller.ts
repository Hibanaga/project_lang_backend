import { Body, Controller, Get, Post, Put } from '@nestjs/common';
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

  @Post()
  post(@Body() request): Promise<User> {
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
