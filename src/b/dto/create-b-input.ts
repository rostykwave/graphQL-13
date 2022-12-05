import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateBInput {
  @IsAlpha()
  @Field()
  data: string;

  @Field({ nullable: true })
  type?: string;
}
