import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service.js';

@Module({
  providers: [ProfileService]
})
export class ProfileModule {}
