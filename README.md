# Profile API

Цифровая GraphQL визитка с навыками, опытом и проектами на TypeScript и Node.js, NestJS, Apollo Server, Prisma, PostgreSQL и Docker.

Публичная версия: [Apollo Sandbox](https://profile-api-production-a194.up.railway.app/graphql).

## Запуск

Нужны Docker и Docker Compose. В папке проекта выполните:

```bash
docker compose up --build
```

После запуска приложения Apollo Sandbox можно найти по адресу http://localhost:3000/graphql.

Docker Compose запускает приложение и PostgreSQL. Приложение создаёт нужные таблицы, добавляет мои данные и запускает API. Файл `.env` для запуска через Docker не нужен.

## Пример запроса

```graphql
query {
  profile {
    name
    description
    githubUrl
    skills {
      name
    }
    experience {
      company
      position
      period
      achievements
    }
    projects {
      name
      url
      description
    }
  }
}
```

## Что внутри

Код GraphQL и чтение профиля находятся в `src/profile`. Схема базы и данные для заполнения находятся в `prisma`. Период работы в ответе собирается из дат начала и окончания работы.
