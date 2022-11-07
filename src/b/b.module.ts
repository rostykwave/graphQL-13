import { Module } from '@nestjs/common';
import { BService } from './b.service';
import { BResolver } from './b.resolver';

@Module({
  providers: [BService, BResolver]
})
export class BModule {}
