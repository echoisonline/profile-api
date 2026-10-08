import { Field, ObjectType } from '@nestjs/graphql';
import { Skill } from './skill.model.js';
import { Experience } from './experience.model.js';

@ObjectType()
export class Profile {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  githubUrl: string;

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Experience])
  experience: Experience[];
}
