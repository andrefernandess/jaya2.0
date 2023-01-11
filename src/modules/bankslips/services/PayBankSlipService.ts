import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import BankSlip from '../typeorm/entities/bankslip';
import { IBankSlipRepository } from '../typeorm/repositories/interfaces/IBankSlipRepository';

interface IRequest {
  id: string;
  payment_date: Date;
}

@injectable()
class PayBankSlipService {
  constructor(
    @inject('BankSlipRepository')
    private bankSlipRepository: IBankSlipRepository,
  ) {}

  public async execute({
    id,
    payment_date,
  }: IRequest): Promise<BankSlip | null> {
    const bank_slip = await this.bankSlipRepository.findOne(id);

    if (!bank_slip) {
      throw new AppError('BankSlip not found with the specified id', 404);
    }
    bank_slip.status = 'PAID';
    bank_slip.payment_date = payment_date;

    await this.bankSlipRepository.update(bank_slip);

    return bank_slip;
  }
}

export default PayBankSlipService;
