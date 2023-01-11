import BankSlip from '@modules/bankslips/typeorm/entities/bankslip';
import FakeBankSlipRepository from '@modules/bankslips/typeorm/repositories/FakeBankSlipRepository';
import { IBankSlipRepository } from '@modules/bankslips/typeorm/repositories/interfaces/IBankSlipRepository';
import IBankSlipRequest from '@modules/bankslips/typeorm/repositories/interfaces/IRequest';
import CreateBankSlipService from '../CreateBankSlipService';

describe('create', () => {
  let bsRepository: IBankSlipRepository();
  let createService: CreateBankSlipService;
  beforeAll(() => {
    bsRepository = new FakeBankSlipRepository();
    createService = new CreateBankSlipService(bsRepository);
  });

  it('should be able to create a new user', async () => {

      const due_date: '2023-01-11';
      const total_in_cents: 1000;
      const customer: 'testusername',
      const status: 'PENDING'

    const user = await createService.execute({ due_date, total_in_cents, customer, status });

    expect(user).toHaveProperty('id');
  });
});
