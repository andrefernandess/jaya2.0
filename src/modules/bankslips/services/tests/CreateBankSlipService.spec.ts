import 'reflect-metadata';
import FakeBankSlipRepository from '@modules/bankslips/typeorm/repositories/FakeBankSlipRepository';
import CreateBankSlipService from '../CreateBankSlipService';
import AppError from '@shared/errors/AppError';

let bsRepository: FakeBankSlipRepository;
let createService: CreateBankSlipService;

describe('create', () => {
  beforeAll(() => {
    bsRepository = new FakeBankSlipRepository();
    createService = new CreateBankSlipService(bsRepository);
  });

  it('should be able to create a new bank slip', async () => {
    const bl = await createService.execute({
      due_date: new Date(2023, 0, 2),
      total_in_cents: 1000,
      customer: 'testusername',
      status: 'PENDING',
    });

    expect(bl).toHaveProperty('id');
  });
});
