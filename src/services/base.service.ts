import { Repository, DeepPartial, DeleteResult } from 'typeorm';

export class BaseService<T> {
  constructor(readonly repo: Repository<T>) {}

  async getData(): Promise<Array<Partial<T>>> {
    return await this.repo.find();
  }

  async getById(id: number): Promise<T | undefined> {
    return await this.repo.findOne(id);
  }

  async update(id: number, body: DeepPartial<T>): Promise<T | undefined> {
    await this.repo.update(id, body);
    return this.getById(id);
  }

  async del(id: number): Promise<T | undefined> {
    const result = await this.getById(id);
    await this.repo.delete(id);
    return result;
  }
}
