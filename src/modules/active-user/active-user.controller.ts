import { Body, Controller, Get, Post } from '@nestjs/common';
import { ActiveUserService } from './active-user.service';

@Controller('active-user')
export class ActiveUserController {
  constructor(private readonly _activeUserService: ActiveUserService) {}

  @Get()
  getAll() {
    return this._activeUserService.getAll();
  }

  @Post()
  post(@Body() request) {
    return this._activeUserService.create(request);
  }
}
