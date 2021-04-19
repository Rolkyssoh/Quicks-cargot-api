import { Module } from '@nestjs/common';
import { AuthCarrierController } from './auth-carrier.controller';
import { AuthCarrierService } from './auth-carrier.service';

@Module({
  controllers: [AuthCarrierController],
  providers: [AuthCarrierService]
})
export class AuthCarrierModule {}
