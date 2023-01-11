import { DataSource } from 'typeorm';
import BankSlip from '@modules/bankslips/typeorm/entities/bankslip';
import User from '@modules/users/typeorm/entities/user';

import { CreateBankSlipTable1672952734042 } from './migrations/1672952734042-CreateBankSlipTable';
import { CreateUserTable1673057348888 } from './migrations/1673057348888-CreateUserTable';

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '12345',
  database: 'Jaya',
  entities: [User, BankSlip],
  migrations: [CreateBankSlipTable1672952734042, CreateUserTable1673057348888],
});
