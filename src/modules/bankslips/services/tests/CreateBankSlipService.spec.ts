import FakeBankSlipRepository from '@modules/bankslips/typeorm/repositories/FakeBankSlipRepository';
import CreateBankSlipService from '../CreateBankSlipService';

describe('create', () => {
  it('should be able to create a new bank slip', async () => {
    const bsRepository = new FakeBankSlipRepository();
    const createService = new CreateBankSlipService(bsRepository);

    const bl = await createService.execute({
      due_date: new Date(2023, 0, 2),
      total_in_cents: 1000,
      customer: 'testusername',
      status: 'PENDING',
    });

    expect(bl).toHaveProperty('id');
  });
});
