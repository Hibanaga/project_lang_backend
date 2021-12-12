import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/model/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAll(): Promise<User[]> {
    return await this.userModel.find({});
  }

  async create(data): Promise<User> {
    try {
      console.log(data);
      const isExist = await this.userModel.exists({ email: data.email });
      console.log(isExist);
      if (isExist) throw new Error();
      return await this.userModel.create(data);
    } catch (error) {
      throw new HttpException('Email already exists', HttpStatus.FORBIDDEN);
    }
  }

  async update(query): Promise<User> {
    try {
      const user = await this.userModel.exists({
        clientID: query.clientID,
      });
      if (!user) throw { message: 'userError' };
      const errorCode = await this.userModel.findOne({ code: query.code });
      if (!errorCode) throw { message: 'codeError' };

      await this.userModel.updateOne({ code: query.code }, { isActive: true });
      const updatedUser = await this.userModel.findOne({ id: query.id });
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
