import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IActiveUserProps } from '../../../types/active-user.types';

export type ActiveUserDocument = ActiveUser & Document;

@Schema()
export class ActiveUser {
  @Prop({
    required: true,
  })
  clientID: string;

  @Prop()
  coin: string;

  @Prop()
  crown: string;

  @Prop()
  progress: string;

  @Prop()
  progressStory: string[];

  @Prop()
  images: string[];
}

export const ActiveUserSchema =
  SchemaFactory.createForClass<IActiveUserProps>(ActiveUser);
