import { Module } from '@nestjs/common';
import { ChallengerApi } from './api/api';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ChallengerApi],
})
export class AppModule {}
