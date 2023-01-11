import { inject, injectable } from 'tsyringe';
import BankSlip from '../typeorm/entities/bankslip';
import { IBankSlipRepository } from '../interfaces/IBankSlipRepository';
import IRequest from '../interfaces/IRequest';

@injectable()
class CreateBankSlipService {
  constructor(
    @inject('BankSlipRepository')
    private bankSlipRepository: IBankSlipRepository,
  ) {}

  public async execute({
    due_date,
    total_in_cents,
    customer,
    status,
  }: IRequest): Promise<BankSlip | null> {
    const bankslip = await this.bankSlipRepository.create({
      due_date,
      total_in_cents,
      customer,
      status,
    });

    return bankslip;
  }
}

export default CreateBankSlipService;
