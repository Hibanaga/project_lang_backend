import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/model/user.schema';
import { sendMail } from './mail/mail.send';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAll(): Promise<User[]> {
    return await this.userModel.find({});
  }

  async returClientID(query):Promise<User> {
    try {
      return await this.userModel.findOne({ email: query });
    } catch(error) {
      throw new HttpException("User not exist", HttpStatus.FORBIDDEN)
    }
  }

  async getMe(query):Promise<User> {
   try {
     const { _id} = await this.userModel.findOne({}, { clientID: query.clientID});
     return await this.userModel.findById(_id)
   } catch(error) {
     throw new HttpException("User not exist", HttpStatus.FORBIDDEN )
   }
  }

  async create(data): Promise<User> {
    try {
      const isExist = await this.userModel.exists({ email: data.email });
      if (isExist) throw new Error();
      sendMail(data.email, data.code);
      return await this.userModel.create(data);
    } catch (error) {
      throw new HttpException('Email already exists', HttpStatus.FORBIDDEN);
    }
  }

  async update(query): Promise<User> {
    try {
      await this.userModel.updateOne({ email: query.email,code: query.code }, { isActive: true });
      const updatedUser = await this.userModel.findOne({ email: query.email });
      return updatedUser;
    } catch (error) {
      console.log(error);
      if (error.message === 'userError') {
        throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
      } else {
        throw new HttpException(
          'Code is not correctly',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }
}
