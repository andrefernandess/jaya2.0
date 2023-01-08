import { getCustomRepository } from 'typeorm';
import BankSlip from '../typeorm/entities/bankslip';
import { BankSlipRepository } from '../typeorm/repositories/BankSlipRepository';

interface IRequest {
  due_date: Date;
  total_in_cents: number;
  customer: string;
  status: string;
}

class CreateBankSlipService {
  public async execute({
    due_date,
    total_in_cents,
    customer,
    status,
  }: IRequest): Promise<BankSlip | undefined> {
    const repository = getCustomRepository(BankSlipRepository);

    const bankslip = repository.create({
      due_date,
      total_in_cents,
      customer,
      status,
    });

    await repository.save(bankslip);

    return bankslip;
  }
}

export default CreateBankSlipService;
