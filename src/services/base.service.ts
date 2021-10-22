import { Repository, DeepPartial } from 'typeorm';

export class BaseService<T> {
  constructor(readonly repo: Repository<T>) {}

  async getData(): Promise<Array<Partial<T>>> {
    return await this.repo.find();
  }

  async getById(id: number): Promise<T | undefined> {
    return await this.repo.findOne(id);
  }
}
