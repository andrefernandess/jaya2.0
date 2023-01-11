import { inject, injectable } from 'tsyringe';
import BankSlip from '../typeorm/entities/bankslip';
import { IBankSlipRepository } from '../typeorm/repositories/interfaces/IBankSlipRepository';

@injectable()
class ListBankSlipService {
  constructor(
    @inject('BankSlipRepository')
    private bankSlipRepository: IBankSlipRepository,
  ) {}
  public async execute(): Promise<BankSlip[] | null> {
    const bank_slips = await this.bankSlipRepository.find();

    return bank_slips;
  }
}

export default ListBankSlipService;
