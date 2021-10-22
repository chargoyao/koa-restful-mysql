import { UpdateDateColumn, CreateDateColumn } from 'typeorm';

export class SharedProp {
  @CreateDateColumn({
    type: 'datetime',
    name: 'create_at',
  })
  createAt!: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
  })
  updateAt!: Date;
}
