import { ActiveUserController } from './active-user.controller';
import { Module } from '@nestjs/common';
import { ActiveUserService } from './active-user.service';
import { ActiveUser, ActiveUserSchema } from './model/active-user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ActiveUser.name, schema: ActiveUserSchema },
    ]),
  ],
  controllers: [ActiveUserController],
  providers: [ActiveUserService],
})
export class ActiveUserModule {}
