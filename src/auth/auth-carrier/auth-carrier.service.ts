import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { CarrierRepository } from './carrier.repository';

@Injectable()
export class AuthCarrierService {
    constructor(
        @InjectRepository(CarrierRepository)
        private carrierRepository: CarrierRepository,
    ){}

    signUpCarrier(createUserDto: CreateUserDto){
        return this.carrierRepository.signUpCarrier(createUserDto)
    }
}
 