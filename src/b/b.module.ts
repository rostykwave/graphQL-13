import { Module } from '@nestjs/common';
import { BService } from './b.service';
import { BResolver } from './b.resolver';
import { B } from './b.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([B])],
  providers: [BService, BResolver],
})
export class BModule {}
