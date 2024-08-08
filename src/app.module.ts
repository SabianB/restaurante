import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {UserModule} from "./user/user.module";


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://pamuDev:9XOBMKBZVNrstY1l@cl1.dst5wy6.mongodb.net/Restaurant?retryWrites=true&w=majority&appName=CL1'), UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
