import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthCarrierModule } from './auth/auth-carrier/auth-carrier.module';
import { AuthUsersModule } from './auth/auth-users/auth-users.module';
import { typeOrmConfig } from './config/typeorm.config';        

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthCarrierModule, 
    AuthUsersModule
  ],
})
export class AppModule {}
