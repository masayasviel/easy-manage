import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MyTable } from 'src/entities/mytable.entity';
import { RequestParamType } from 'src/interface';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(MyTable)
    private readonly myTableRepo: Repository<MyTable>
  ) {}
  getAll() {
    return this.myTableRepo.find();
  }
  getDetail(id: number) {
    return this.myTableRepo.findOne({id: id});
  }
  async createRecode(param: RequestParamType): Promise<boolean> {
    const mytable = new MyTable();
    mytable.name = param.name;
    mytable.message = param.message;
    const res = await this.myTableRepo.insert(mytable);
    return res.generatedMaps.length > 0
  }
}
