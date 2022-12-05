import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { B } from './b.entity';
import { CreateBInput } from './dto/create-b-input';

@Injectable()
export class BService {
  constructor(
    @InjectRepository(B)
    private readonly bRepository: Repository<B>,
  ) {}
  async createB(createBInput: CreateBInput): Promise<B> {
    const newB = this.bRepository.create(createBInput);
    return this.bRepository.save(newB);
  }

  async findAll(): Promise<B[]> {
    return this.bRepository.find();
  }

  async findOne(id: number): Promise<B> {
    return this.bRepository.findOneByOrFail({ id });
  }
}
