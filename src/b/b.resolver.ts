import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { B } from './b.entity';
import { BService } from './b.service';
import { CreateBInput } from './dto/create-b-input.dto';

@Resolver((of) => B)
export class BResolver {
  constructor(private bService: BService) {}

  @Query((returns) => B)
  getB(@Args('id', { type: () => Int }) id: number): Promise<B> {
    return this.bService.findOne(id);
  }

  @Query((returns) => [B])
  allB(): Promise<B[]> {
    return this.bService.findAll();
  }

  @Mutation((returns) => B)
  createB(@Args('createBInput') createBInput: CreateBInput): Promise<B> {
    return this.bService.createB(createBInput);
  }
}
