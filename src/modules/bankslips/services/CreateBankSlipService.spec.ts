import CreateBankSlipService from './CreateBankSlipService';

describe('CreateBL', () => {
  //const fake = new FakeBankSlipRepository();

  const service = new CreateBankSlipService();

  let due_date = new Date();
  let total_in_cents = 1000;
  let customer = 'teste';
  let status = 'PENDING';

  const bl = service.execute({ due_date, total_in_cents, customer, status });

  expect(bl).toHaveProperty('id');
});
