import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { ActiveUserModule } from './modules/active-user/active-user.module';
import { config } from './config/default';
import { IntroduceLessonsModule } from './modules/introduce-lessons/introduce-lessons.module';
import { StoryLessonModule } from './modules/story-lesson/story-lesson.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.uri),
    UserModule,
    ActiveUserModule,
    IntroduceLessonsModule,
    StoryLessonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
