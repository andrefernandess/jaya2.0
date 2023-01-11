import { app } from '@shared/http/app';
import request from 'supertest';

describe('Do note create BankSlip Controller', () => {
  it('Should be able to create a new bankslip', async () => {
    const response = await request(app).post('/rest/bankslips/').send({
      due_date: '2023-01-10',
      total_in_cents: 10000,
      customer: 'Customer test',
    });

    expect(response.status).toBe(400);
  });
});
