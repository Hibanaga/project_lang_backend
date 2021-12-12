import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ActiveUserService } from './active-user.service';
import { ActiveUser } from './model/active-user.schema';

@Controller('active-user')
export class ActiveUserController {
  constructor(private readonly _activeUserService: ActiveUserService) {}

  @Get('all')
  getAll(): Promise<ActiveUser[]> {
    return this._activeUserService.getAll();
  }

  @Get()
  get(@Query() query): Promise<ActiveUser> {
    return this._activeUserService.get(query);
  }

  @Post()
  post(@Body() request): Promise<ActiveUser> {
    console.log(request);
    return this._activeUserService.create(request);
  }
}
