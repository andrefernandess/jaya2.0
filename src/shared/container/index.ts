import { container } from 'tsyringe';

import BankSlipRepository from '@modules/bankslips/typeorm/repositories/BankSlipRepository';
import { IBankSlipRepository } from '@modules/bankslips/interfaces/IBankSlipRepository';

container.registerSingleton<IBankSlipRepository>(
  'BankSlipRepository',
  BankSlipRepository,
);
