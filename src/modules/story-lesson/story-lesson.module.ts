import { StoryLessonController } from './story-lesson.controller';
import { Module } from '@nestjs/common';
import { StoryLessonService } from './story-lesson.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StoryLesson, StoryLessonSchema } from './model/story-lesson.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StoryLesson.name, schema: StoryLessonSchema },
    ]),
  ],
  controllers: [StoryLessonController],
  providers: [StoryLessonService],
})
export class StoryLessonModule {}
