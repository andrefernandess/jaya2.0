import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import BankSlip from '../typeorm/entities/bankslip';
import { BankSlipRepository } from '../typeorm/repositories/BankSlipRepository';

interface IRequest {
  id: string;
  payment_date: Date;
}

class PayBankSlipService {
  public async execute({
    id,
    payment_date,
  }: IRequest): Promise<BankSlip | undefined> {
    const repository = getCustomRepository(BankSlipRepository);

    const bank_slip = await repository.findOne(id);

    if (!bank_slip) {
      throw new AppError('BankSlip not found with the specified id', 404);
    }
    bank_slip.status = 'PAID';
    bank_slip.payment_date = payment_date;

    await repository.save(bank_slip);

    return bank_slip;
  }
}

export default PayBankSlipService;
