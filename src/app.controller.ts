import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/items')
  getItems(): any {
    return [
      {
        id: 1,
        name: 'vlad',
      },
      {
        id: 2,
        name: 'vadim',
      },
    ];
  }
}
