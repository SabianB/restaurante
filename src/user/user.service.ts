import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

import{User} from "./schemas/user.schema";

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name) private userModel: Model<User>) {}


    async create(user:any){
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

    async findAll(){
        return this.userModel.find().exec();
    }

    async findOneById(id: string){
        const user = await this.userModel.findById(id).exec();
        if (!user){
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    async findOneByName(name: string){
        const user = await this.userModel.findOne({name}).exec();
        if (!user){
            throw new NotFoundException(`User with name ${name} not found`);
        }
        return user;
    }



}