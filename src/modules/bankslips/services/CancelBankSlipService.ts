import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import BankSlip from '../typeorm/entities/bankslip';
import { BankSlipRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  id: string;
}

class CancelBankSlipByIdService {
  public async execute({ id }: IRequest): Promise<BankSlip | undefined> {
    const repository = getCustomRepository(BankSlipRepository);

    const bank_slip = await repository.findOne(id);

    if (!bank_slip) {
      throw new AppError('BankSlip not found with the specified id', 404);
    }
    bank_slip.status = 'Cancelado';

    await repository.save(bank_slip);

    return bank_slip;
  }
}

export default CancelBankSlipByIdService;
