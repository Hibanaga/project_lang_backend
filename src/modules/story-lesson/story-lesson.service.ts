import { IStoryLessonProps } from './../../types/lesson.types';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StoryLesson, StoryLessonDocument } from './model/story-lesson.schema';

@Injectable()
export class StoryLessonService {
  constructor(
    @InjectModel(StoryLesson.name)
    private storyLessonModel: Model<StoryLessonDocument>,
  ) {}

  async get(query: { theme: string }): Promise<IStoryLessonProps> {
    return await this.storyLessonModel.findOne(query);
  }
}
