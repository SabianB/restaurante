import { Controller, Post, Body } from '@nestjs/common';
import {UserService} from "./user.service";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Post()
    async create(@Body() createUser: any){
        return this.userService.create(createUser);
    }

}