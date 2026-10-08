import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { experiences, profileData, skills, projects } from './data.js';

const url = process.env.DATABASE_URL;
if (!url) throw new Error('DATABASE_URL is missing');

const adapter = new PrismaPg({ connectionString: url });
const prisma = new PrismaClient({ adapter });

try {
  await prisma.profile.upsert({
    where: { id: 'me' },
    create: {
      id: 'me',
      ...profileData,
    },
    update: profileData,
  });

  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { id: skill.id },
      create: {
        ...skill,
        profileId: 'me',
      },
      update: { name: skill.name },
    });
  }

  for (const experience of experiences) {
    await prisma.experience.upsert({
      where: { id: experience.id },
      create: {
        ...experience,
        profileId: 'me',
      },
      update: {
        company: experience.company,
        position: experience.position,
        period: experience.period,
        achievements: experience.achievements,
      },
    });
  }

  for (const project of projects) {
    await prisma.projects.upsert({
      where: { id: project.id },
      create: {
        ...project,
        profileId: 'me',
      },
      update: {
        name: project.name,
        url: project.url,
        description: project.description,
      },
    });
  }
} finally {
  await prisma.$disconnect();
}
