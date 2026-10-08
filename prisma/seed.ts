import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';

const url = process.env.DATABASE_URL;
if (!url) throw new Error('DATABASE_URL is missing');

const adapter = new PrismaPg({ connectionString: url });
const prisma = new PrismaClient({ adapter });

const profileData = {
  name: 'Никита Нестеренко',
  description: 'Fullstack-разработчик',
  githubUrl: 'https://github.com/echoisonline',
};

const skills = [
  { id: 'react', name: 'React' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'javascript', name: 'JavaScript' },
  { id: 'nextjs', name: 'Next.js' },
  { id: 'redux', name: 'Redux' },
  { id: 'zustand', name: 'Zustand' },
  { id: 'tanstack-query', name: 'TanStack Query' },
  { id: 'websocket', name: 'WebSocket' },
  { id: 'socket-io', name: 'Socket.IO' },
  { id: 'heroui', name: 'HeroUI' },
  { id: 'shadcn', name: 'shadcn/ui' },
  { id: 'mui', name: 'MaterialUI' },
  { id: 'tailwind-css', name: 'Tailwind CSS' },
  { id: 'scss', name: 'SCSS' },
  { id: 'gsap', name: 'GSAP' },
  { id: 'framer', name: 'Framer Motion' },
  { id: 'husky', name: 'Husky' },
  { id: 'nodejs', name: 'Node.js' },
  { id: 'express', name: 'Express' },
  { id: 'fastify', name: 'Fastify' },
  { id: 'zod', name: 'Zod' },
  { id: 'rest-api', name: 'REST API' },
  { id: 'postgresql', name: 'PostgreSQL' },
  { id: 'mongodb', name: 'MongoDB' },
  { id: 'sql', name: 'SQL' },
  { id: 'redis', name: 'Redis' },
  { id: 'bullmq', name: 'BullMQ' },
  { id: 'nestjs', name: 'NestJS' },
  { id: 'prisma', name: 'Prisma' },
  { id: 'graphql', name: 'GraphQL' },
  { id: 'linux', name: 'Linux' },
  { id: 'docker', name: 'Docker' },
  { id: 'gvisor', name: 'gVisor' },
  { id: 'caddy', name: 'Caddy' },
  { id: 'vite', name: 'Vite' },
  { id: 'webpack', name: 'Webpack' },
  { id: 'vitest', name: 'Vitest' },
  { id: 'git', name: 'Git' },
  { id: 'eslint', name: 'ESLint' },
  { id: 'prettier', name: 'Prettier' },
  { id: 'figma', name: 'Figma' },
  { id: 'posthog', name: 'PostHog' },
  { id: 'linear', name: 'Linear' },
  { id: 'jira', name: 'Jira' },
  { id: 'claude-code', name: 'Claude Code' },
  { id: 'codex', name: 'Codex' },
  { id: 'harness', name: 'AI Harness' },
  { id: 's3-storage', name: 'S3 storage' },
  { id: 'stripe', name: 'Stripe' },
  { id: 'keycloak', name: 'Keycloak' },
];

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
} finally {
  await prisma.$disconnect();
}
