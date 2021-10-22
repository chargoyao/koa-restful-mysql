import { Service } from 'typedi';
import { Repository, Connection } from 'typeorm';
import { Users } from '../entities/users.entity';

@Service()
export class UsersService {
  repo: Repository<Users>;
  constructor(db: Connection) {
    this.repo = db.getRepository(Users)
  }
}
