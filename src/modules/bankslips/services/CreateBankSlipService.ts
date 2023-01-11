import { inject, injectable } from 'tsyringe';
import BankSlip from '../typeorm/entities/bankslip';
import BankSlipRepository from '../typeorm/repositories/BankSlipRepository';
import { IBankSlipRepository } from '../typeorm/repositories/interfaces/IBankSlipRepository';
import IRequest from '../typeorm/repositories/interfaces/IRequest';

class CreateBankSlipService {
  constructor(private bankSlipRepository: BankSlipRepository) {}

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
