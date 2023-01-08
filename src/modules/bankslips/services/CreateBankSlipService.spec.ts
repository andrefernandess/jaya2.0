// import CreateBankSlipService from './CreateBankSlipService';
// import FakeBankSlipRepository from '@modules/bankslips/typeorm/repositories/fakes/FakeBankSlipRepository';

// describe('CreateBankSlip', () => {
//   it('should be create a new bankslip', async () => {
//     const fakeBankSlipRepository = new FakeBankSlipRepository();

//     const createBankSlip = new CreateBankSlipService(fakeBankSlipRepository);

//     const bankSlip = await createBankSlip.execute({
//       due_date: new Date('2022-01-10'),
//       total_in_cents: 1000,
//       customer: 'teste',
//       status: 'PENDING',
//     });

//     expect(bankSlip).toHaveProperty('id');
//   });

//   it('should be not create a new bankslip', () => {
//     expect(1).toBe(1);
//   });
// });
