import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import BankSlip from '../typeorm/entities/bankslip';
import { IBankSlipRepository } from '../typeorm/repositories/interfaces/IBankSlipRepository';

interface IRequest {
  id: string;
}

@injectable()
class CancelBankSlipByIdService {
  constructor(
    @inject('BankSlipRepository')
    private bankSlipRepository: IBankSlipRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<BankSlip | undefined> {
    const bank_slip = await this.bankSlipRepository.findOne(id);

    if (!bank_slip) {
      throw new AppError('BankSlip not found with the specified id', 404);
    }
    bank_slip.status = 'Cancelado';

    await this.bankSlipRepository.update(bank_slip);

    return bank_slip;
  }
}

export default CancelBankSlipByIdService;
