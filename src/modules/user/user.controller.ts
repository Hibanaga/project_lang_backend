import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get()
  getAll() {
    return this._userService.getAll();
  }

  @Post()
  post(@Body() request) {
    return this._userService.create(request);
  }
}
