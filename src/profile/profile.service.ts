import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}
  async getProfile() {
    const result = await this.prisma.profile.findUniqueOrThrow({
      where: {
        id: 'me',
      },
      include: {
        skills: true,
        experience: { orderBy: { startedAt: 'desc' } },
        projects: true,
      },
    });
    return result;
  }
}
