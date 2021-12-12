import { IStoryLessonProps } from './../../../types/lesson.types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StoryLessonDocument = StoryLesson & Document;

@Schema()
export class StoryLesson {
  @Prop()
  theme: string;

  @Prop()
  title: string;

  @Prop()
  dialog: [];
}

export const StoryLessonSchema =
  SchemaFactory.createForClass<IStoryLessonProps>(StoryLesson);
