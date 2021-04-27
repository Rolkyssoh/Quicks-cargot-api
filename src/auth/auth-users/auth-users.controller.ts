import { Body, Controller, Post } from '@nestjs/common';
import { IdentifyUserDto } from '../dto/create-user.dto';
import { AuthUsersService } from './auth-users.service';

@Controller('auth-users')
export class AuthUsersController {
    constructor(private authUsersService: AuthUsersService){}

    @Post('/login')
    loginUsers(@Body() identifyUserDto: IdentifyUserDto){
        return this.authUsersService.loginUsers(identifyUserDto)
    }
}
