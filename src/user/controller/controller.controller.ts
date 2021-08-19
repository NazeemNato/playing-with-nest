import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('user')
export class ControllerController {
    @Get()
    getUsers() {
        return "all users";
    }

    @Get("/:userId")
    getUserById(){
        return "get user by id"
    }

    @Post()
    createUser() {
        return "create user"
    }

    @Put("/:userId")
    updateUser() {
        return "update user";
    }
}
