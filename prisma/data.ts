export const profileData = {
  name: 'Никита Нестеренко',
  description: 'Fullstack-разработчик',
  githubUrl: 'https://github.com/echoisonline',
};

export const skills = [
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

export const experiences = [
  {
    id: 'aitextura',
    company: 'AITEXTURA',
    position: 'Fullstack-разработчик',
    period: 'Май 2024 - Сентябрь 2026',
    achievements: `Работал над SaaS-платформой AI-агентов, которой пользуются 1 500+ организаций в 12 странах. Отвечал за сквозную разработку продукта: React/TypeScript frontend, Node.js/Express API, PostgreSQL и Redis, фоновые задачи, интеграции, контейнерную инфраструктуру и эксплуатацию в production.
— Перепроектировал React/TypeScript frontend и внедрил code splitting и ленивую загрузку разделов. Объём начального JS-бандла сократился с 1 240 до 335 КБ gzip, p75 LCP — с 4,3 до 1,8 с.
— Переработал онбординг AI-агента с 11 до 4 шагов. По наблюдениям в логах время запуска сократилось примерно с 32 до 6 минут, а доля самостоятельных запусков выросла с 41% до 76%.
— Разработал интерфейс наблюдения за AI-агентами в реальном времени: потоковые логи выполнения и удалённую терминальную сессию через WebSocket. Переход с HTTP-поллинга на доставку по событиям снизил задержку отображения логов с 1 800 до 190 мс.
— Спроектировал UI-kit нового frontend в Figma на базе HeroUI: адаптировал компоненты под визуальный стиль и UX-сценарии продукта, сформировал единые паттерны интерфейса для разработки.
— Примерно за 2 недели запустил хостинг автономных AI-агентов: спроектировал контейнерную изоляцию через gVisor вместо отдельного VPS для каждого клиента. Решение вошло в старшие тарифы и обслуживает 2 800+ агентов.
— Оптимизировал REST API на Node.js/Express с помощью Redis-кэширования. p95 времени ответа снизился с 640 до 180 мс. Реализовал фоновую обработку задач в BullMQ.
— Устранил гонки при создании и удалении агентов с помощью идемпотентности, Redis-локов и контроля переходов состояний. Количество связанных инцидентов снизилось с 5–8 в неделю до 0 в течение четырёх месяцев после релиза.
— Разработал подписочный биллинг на Stripe для организаций: trial-периоды, тарифы, лимиты и балансы. Идемпотентная обработка событий и уникальные ограничения PostgreSQL исключили повторные начисления; конверсия trial → paid выросла с 12% до 23%, а доля неуспешных платежей снизилась с 9,2% до 3,4%.`,
  },
  {
    id: 'ztech',
    company: 'ZTech',
    position: 'Frontend-разработчик',
    period: 'Январь 2022 - Январь 2024',
    achievements: `Разрабатывал SPA и продуктовые интерфейсы для проектов в логистике и недвижимости.
— Реализовывал интерфейсы на React, Redux и TypeScript: формы, таблицы, пользовательские сценарии и переиспользуемые компоненты.
— Интегрировал frontend с REST API, обрабатывал загрузку, ошибки и состояния данных.
— Вёл задачи от декомпозиции и оценки до реализации, ревью кода и выхода в production.
— Работал в командах клиентов, участвовал в планировании задач и согласовании API-контрактов с backend-разработчиками.
— Поддерживал Webpack-сборку и развивал общую frontend-кодовую базу.`,
  },
];

export const projects = [
  {
    id: 'profile-api',
    name: 'Profile API',
    url: 'https://github.com/echoisonline/profile-api',
    description:
      'Цифровая визитка с GraphQL API на TypeScript, NestJS, Prisma, PostgreSQL.',
  },
];
