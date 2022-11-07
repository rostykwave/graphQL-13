import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBInput {
  @Field()
  data: string;
}
