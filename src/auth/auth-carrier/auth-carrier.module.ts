import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthCarrierController } from './auth-carrier.controller';
import { AuthCarrierService } from './auth-carrier.service';
import { CarrierRepository } from './carrier.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CarrierRepository])
  ],
  controllers: [AuthCarrierController],
  providers: [AuthCarrierService]
})
export class AuthCarrierModule {}
