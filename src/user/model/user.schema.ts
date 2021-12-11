import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IUserSchemaProp } from '../../types/user.types';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    required: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop()
  nickname: string;

  @Prop()
  clientID: string;

  @Prop()
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass<IUserSchemaProp>(User);
