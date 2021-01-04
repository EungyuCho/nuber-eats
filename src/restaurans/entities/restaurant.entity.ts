import { Field, ObjectType, Query } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(type => String)
  name: string;

  @Field(returns => Boolean, { nullable: true })
  isGood?: boolean;
}
