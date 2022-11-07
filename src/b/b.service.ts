import { Injectable } from '@nestjs/common';
import { B } from './b.model';
import { bDatabase } from './database/b-database';
import { CreateBInput } from './dto/create-b-input.dto';

@Injectable()
export class BService {
  async createB(createBInput: CreateBInput): Promise<B> {
    const b = new B();

    if (bDatabase.length === 0) {
      b.id = 1;
    } else {
      b.id = bDatabase.at(-1).id + 1;
    }

    b.data = createBInput.data;
    bDatabase.push(b);

    return b;
  }

  async findAll(): Promise<B[]> {
    // const b = new B();
    // b.id = 1;
    // b.data = 'dataaa';

    return bDatabase;

    // return [b];
  }

  async findOne(id: number): Promise<B> {
    // const b = new B();
    // b.id = 1;
    // b.data = 'dataaa';

    return bDatabase.find((a) => a.id === Number(id));

    // return [b];
  }
}
