import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { ActiveUserService } from './active-user.service';
import { ActiveUser } from './model/active-user.schema';

@Controller('active-user')
export class ActiveUserController {
  constructor(private readonly _activeUserService: ActiveUserService) {}

  @Get('all')
  getAll(): Promise<ActiveUser[]> {
    return this._activeUserService.getAll();
  }

  @Get('login')
  getLogin(@Query() query: any): Promise<ActiveUser> {
    return this._activeUserService.getLogin(query);
  }

  @Get()
  get(@Query() query): Promise<ActiveUser> {
    return this._activeUserService.get(query);
  }

  @Post()
  post(@Body() request): Promise<ActiveUser> {
    return this._activeUserService.create(request);
  }

  @Put()
  put(@Body() request): Promise<ActiveUser> {
    return this._activeUserService.put(request);
  }

  @Put('story')
  putStory(@Body() request): Promise<ActiveUser> {
    return this._activeUserService.putStory(request);
  }

  @Put('avatar')
  putAvatars(@Body() request): Promise<ActiveUser> {
    return this._activeUserService.putImages(request);
  }
}
