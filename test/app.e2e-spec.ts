import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from './../src/app.module.js';

describe('GraphQL (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('(POST) /graphql', async () => {
    const query = `query {
  profile {
    name
    description
    skills {
      name
    }
    projects {
      name
      url
    }
    experience {
      company
    }
  }
}`;

    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200);

    expect(response.body.errors).toBeUndefined();
    expect(response.body.data.profile.name).toBe('Никита Нестеренко');
    expect(response.body.data.profile.experience[0].company).toBe('AITEXTURA');

    const skills = response.body.data.profile.skills.map(
      (skill: { name: string }) => skill.name,
    );
    expect(skills).toContain('TypeScript');

    const projects = response.body.data.profile.projects;
    expect(projects.length).toBeGreaterThan(0);
    expect(projects[0].name).toBeTruthy();
    expect(projects[0].url).toMatch(/^https?:\/\//);
  });

  afterEach(async () => {
    await app.close();
  });
});
