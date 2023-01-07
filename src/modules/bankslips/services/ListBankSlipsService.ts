import { getCustomRepository } from 'typeorm';
import BankSlip from '../typeorm/entities/bankslip';
import { BankSlipRepository } from '../typeorm/repositories/ProductsRepository';

class ListBankSlipService {
  public async execute(): Promise<BankSlip[] | undefined> {
    const repository = getCustomRepository(BankSlipRepository);

    const bank_slips = await repository.find();

    return bank_slips;
  }
}

export default ListBankSlipService;
