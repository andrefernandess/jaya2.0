import { container } from 'tsyringe';

import { IBankSlipRepository } from '@modules/bankslips/typeorm/repositories/interfaces/IBankSlipRepository';
import BankSlipRepository from '@modules/bankslips/typeorm/repositories/BankSlipRepository';

container.registerSingleton<IBankSlipRepository>(
  'BankSlipRepository',
  BankSlipRepository,
);
