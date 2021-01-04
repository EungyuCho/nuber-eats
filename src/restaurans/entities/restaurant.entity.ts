import { Field, ObjectType, Query } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(type => String)
  name: string;

  @Field(returns => Boolean)
  isVegan?: boolean;

  @Field(returns => String)
  address: string;

  @Field(returns => String)
  ownerName: string;
}
