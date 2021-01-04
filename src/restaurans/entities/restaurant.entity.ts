import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

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
