import { ActiveUser, ActiveUserDocument } from './model/active-user.schema';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ActiveUserService {
  constructor(
    @InjectModel(ActiveUser.name)
    private activeUserModel: Model<ActiveUserDocument>,
  ) {}

  async getAll(): Promise<ActiveUser[]> {
    return await this.activeUserModel.find({});
  }

  async get(query: { clientID: string }): Promise<ActiveUser> {
    try {
      return await this.activeUserModel.findOne(query);
    } catch (error) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
  }

  async create(data): Promise<ActiveUser> {
    try {
      const activeUser = await this.activeUserModel.findOne({
        clientID: data.clientID,
      });
      if (activeUser) throw new Error();
      return await this.activeUserModel.create(data);
    } catch (error) {
      throw new HttpException('User already exists', HttpStatus.FORBIDDEN);
    }
  }
}
