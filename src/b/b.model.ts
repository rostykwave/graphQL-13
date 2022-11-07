import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class B {
  @Field((type) => Int)
  id: number;

  @Field()
  data: string;
}
