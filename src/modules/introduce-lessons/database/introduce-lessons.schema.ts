import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IIntroduceLessonProps } from '../../../types/lesson.types';

export type IntroduceLessonDocument = IntroduceLesson & Document;

@Schema()
export class IntroduceLesson {
  @Prop()
  title: string;

  @Prop()
  content: [];
}

export const IntroduceLessonSchema =
  SchemaFactory.createForClass<IIntroduceLessonProps>(IntroduceLesson);
