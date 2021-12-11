import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ActiveUserModule } from './active-user/active-user.module';
import { config } from './config/default';

@Module({
  imports: [MongooseModule.forRoot(config.uri), UserModule, ActiveUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
