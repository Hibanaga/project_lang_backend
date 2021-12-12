import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { ActiveUserModule } from './modules/active-user/active-user.module';
import { config } from './config/default';
import { IntroduceLessonsModule } from './modules/introduce-lessons/introduce-lessons.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.uri),
    UserModule,
    ActiveUserModule,
    IntroduceLessonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
