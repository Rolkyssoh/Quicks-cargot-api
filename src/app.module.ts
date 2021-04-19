import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthCarrierModule } from './auth/auth-carrier/auth-carrier.module';
import { AuthUsersModule } from './auth/auth-users/auth-users.module';

@Module({
  imports: [AuthCarrierModule, AuthUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
