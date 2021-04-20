import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthCarrierModule } from './auth/auth-carrier/auth-carrier.module';
import { AuthUsersModule } from './auth/auth-users/auth-users.module';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthCarrierModule, 
    AuthUsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
