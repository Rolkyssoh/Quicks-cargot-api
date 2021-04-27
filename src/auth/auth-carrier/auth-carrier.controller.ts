import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCarrierDto } from '../dto/create-user.dto';
import { AuthCarrierService } from './auth-carrier.service';

@Controller('auth-carrier')
export class AuthCarrierController {
    constructor(private authCarrierService: AuthCarrierService){}

    @Post('/signupcarrier')
    @UsePipes(ValidationPipe)
    signUpCarrier( @Body() createCarrierDto: CreateCarrierDto) {
        return this.authCarrierService.signUpCarrier(createCarrierDto)
    }
} 
 