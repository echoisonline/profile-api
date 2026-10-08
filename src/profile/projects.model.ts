import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Projects {
  @Field()
  name: string;

  @Field()
  url: string;

  @Field()
  description: string;
}
