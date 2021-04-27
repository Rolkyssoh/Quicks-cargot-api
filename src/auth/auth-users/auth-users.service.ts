import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdentifyUserDto } from '../dto/create-user.dto';
import { AuthUsersRepository } from './auth-users.repository';

@Injectable()
export class AuthUsersService {
    // constructor(
    //     @InjectRepository(AuthUsersRepository)
    //     private authUsersRepository: AuthUsersRepository
    // ){}

    loginUsers(identifyUserDto:IdentifyUserDto){
        // return this.authUsersRepository.loginUsers(identifyUserDto)
    }
}
