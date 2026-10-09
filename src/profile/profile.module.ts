import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service.js';
import { ProfileResolver } from './profile.resolver.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { ExperienceResolver } from './experience.resolver.js';

@Module({
  providers: [
    ProfileService,
    ProfileResolver,
    PrismaService,
    ExperienceResolver,
  ],
})
export class ProfileModule {}
