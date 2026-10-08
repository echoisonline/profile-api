import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service.js';
import { ProfileResolver } from './profile.resolver.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  providers: [ProfileService, ProfileResolver, PrismaService],
})
export class ProfileModule {}
