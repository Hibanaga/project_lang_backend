import { ActiveUser, ActiveUserDocument } from './model/active-user.schema';
import { Injectable } from '@nestjs/common';
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

  async create(data): Promise<ActiveUser> {
    return await this.activeUserModel.create(data);
  }
}
