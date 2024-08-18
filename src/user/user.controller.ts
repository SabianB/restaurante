import {Controller, Post, Body, Get, Param} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "./schemas/user.schema";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Get('getAllUsers')
    async findAll(){
        return this.userService.findAll();
    }

    @Get(':_id')
    async findById(@Param('_id') id:string){
        return this.userService.findOneById(id);
    }

    //En caso de referencia
    @Get('name/:name')
    async findOneByName(@Param('name') name: string): Promise<User> {
        return this.userService.findOneByName(name);
    }


    @Post()
    async create(@Body() createUser: any){
        return this.userService.create(createUser);
    }



}