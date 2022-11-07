import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { B } from './b.model';
import { BService } from './b.service';
import { CreateBInput } from './dto/create-b-input.dto';

@Resolver((of) => B)
export class BResolver {
  constructor(private bService: BService) {}

  getB(@Args('id',{ type:()=>Int}) id:number): Promise<B>{
    return this.bService.findOne(id).
  }

  @Query((retuns) => [B])
  allB(): Promise<B[]> {
    return this.bService.findAll();
  }

  @Mutation((retuns) => B)
  createB(@Args('createBInput') createBInput: CreateBInput): Promise<B> {
    return this.bService.createB(createBInput);
  }
}
