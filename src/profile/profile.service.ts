import { Injectable } from '@nestjs/common';
import { Profile } from './profile.model.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}
  async getProfile(): Promise<Profile> {
    const result = await this.prisma.profile.findUniqueOrThrow({
      where: {
        id: 'me',
      },
      include: { skills: true, experience: true, projects: true },
    });
    return result;
  }
}
