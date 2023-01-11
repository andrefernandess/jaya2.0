import BankSlip from '../typeorm/entities/bankslip';
import { IBankSlipRepository } from '../interfaces/IBankSlipRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListBankSlipService {
  private bankSlipRepository: IBankSlipRepository;

  constructor(
    @inject('BankSlipRepository')
    bankSlipRepository: IBankSlipRepository,
  ) {
    this.bankSlipRepository = bankSlipRepository;
  }
  public async execute(): Promise<BankSlip[] | null> {
    const bank_slips = this.bankSlipRepository.find();

    return bank_slips;
  }
}

export default ListBankSlipService;
