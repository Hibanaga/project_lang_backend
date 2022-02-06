import { User, UserDocument } from './../user/model/user.schema';
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

  async getLogin(query: any) {
    console.log(query);
    try {
      const isExistNickName = await this.activeUserModel.exists({
        email: query.email,
        password: query.password,
        isActive: true,
      });
      if (!isExistNickName) throw new Error();
      const user = await this.activeUserModel.findOne({ clientID: query.clientID });
      return user
    } catch (error) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
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

  async put(data): Promise<ActiveUser> {
    try {
      const { clientID, crown, coin, progress } = data;
      await this.activeUserModel.findOneAndUpdate(
        { clientID: clientID },
        { crown: crown, coin: coin, progress: progress },
      );
      return await this.activeUserModel.findOne({ clientID: clientID });
    } catch (error) {
      throw new HttpException('Error Update', HttpStatus.FORBIDDEN);
    }
  }

  async putStory(data): Promise<any> {
    try {
      const { clientID, currentTheme } = data;
      await this.activeUserModel.findOneAndUpdate(
        { clientID: clientID },
        {
          $push: { progressStory: currentTheme },
        },
      );
      return await this.activeUserModel.findOne({ clientID: clientID });
    } catch (error) {
      throw new HttpException('Error Update Story', HttpStatus.FORBIDDEN);
    }
  }

  async putImages(data): Promise<any> {
    try {
      const { clientID, images, coin } = data;

      await this.activeUserModel.updateOne(
          { clientID: clientID },
          { $addToSet: { images: { $each: images } } , coin:coin },
        );

      return await this.activeUserModel.findOne({ clientID: clientID });
    } catch (error) {
      throw new HttpException('Error update Images shop', HttpStatus.BAD_REQUEST);
    }
  }
}
