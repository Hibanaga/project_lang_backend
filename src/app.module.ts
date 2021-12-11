import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './database/user.schema';

const url =
  process.env.MONGO_URI ||
  `mongodb+srv://hibana_main:Zaxscd1212@clusterprojectlang.jt1vg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

@Module({
  imports: [
    MongooseModule.forRoot(url),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
