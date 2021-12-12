import { IntroduceLessonsController } from './introduce-lessons.controller';
import {
  IntroduceLesson,
  IntroduceLessonSchema,
} from './database/introduce-lessons.schema';
import { Module } from '@nestjs/common';
import { IntroduceLessonsService } from './introduce-lessons.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: IntroduceLesson.name, schema: IntroduceLessonSchema },
    ]),
  ],
  controllers: [IntroduceLessonsController],
  providers: [IntroduceLessonsService],
})
export class IntroduceLessonsModule {}
