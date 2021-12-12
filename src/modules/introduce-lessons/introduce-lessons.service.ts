import { IIntroduceLessonProps } from '../../types/lesson.types';
import {
  IntroduceLesson,
  IntroduceLessonDocument,
} from './database/introduce-lessons.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class IntroduceLessonsService {
  constructor(
    @InjectModel(IntroduceLesson.name)
    private intorudeLessonModel: Model<IntroduceLessonDocument>,
  ) {}

  async getLesson(query: { title: string }): Promise<IIntroduceLessonProps> {
    return await this.intorudeLessonModel.findOne(query);
  }
}
