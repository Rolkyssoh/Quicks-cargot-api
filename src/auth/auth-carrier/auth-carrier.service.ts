import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCarrierDto } from '../dto/create-user.dto';
import { CarrierRepository } from './carrier.repository';

@Injectable()
export class AuthCarrierService {
    constructor(
        @InjectRepository(CarrierRepository)
        private carrierRepository: CarrierRepository,
    ){}

    signUpCarrier(createCarrierDto: CreateCarrierDto){
        return this.carrierRepository.signUpCarrier(createCarrierDto)
    }
}
 