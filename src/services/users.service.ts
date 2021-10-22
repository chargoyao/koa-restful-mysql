import { Service } from 'typedi';
import { Repository, Connection } from 'typeorm';
import { Users } from '../entities/users.entity';
import { BaseService } from './base.service';

@Service()
export class UsersService extends BaseService<Users> {
  repo: Repository<Users>;
  constructor(db: Connection) {
    super(db.getRepository(Users));
    this.repo = db.getRepository(Users);
  }
}
