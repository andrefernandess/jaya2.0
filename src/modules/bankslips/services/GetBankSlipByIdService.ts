import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { BankSlipRepository } from '../typeorm/repositories/ProductsRepository';
import { BankSlipDto } from '../dtos/BankSlipDto';

interface IRequest {
  id: string;
}

class GetBankSlipByIdService {
  public async execute({ id }: IRequest): Promise<BankSlipDto | undefined> {
    const repository = getCustomRepository(BankSlipRepository);

    const bank_slip = await repository.findOne(id);

    if (!bank_slip) {
      throw new AppError('Bankslip not found with the specified id', 404);
    }

    const today = new Date();
    const slip_due_date = new Date(bank_slip.due_date);

    const atraso = today.getDay() - slip_due_date.getDay();

    let fines = 0;
    if (atraso > 0 && atraso <= 10) {
      fines = bank_slip.total_in_cents + bank_slip.total_in_cents * 0.05 * 1;
    } else if (atraso > 10) {
      fines = bank_slip.total_in_cents + bank_slip.total_in_cents * 0.1 * 1;
    }

    const dto = new BankSlipDto(
      bank_slip.id,
      bank_slip.due_date,
      bank_slip.payment_date,
      bank_slip.total_in_cents,
      bank_slip.customer,
      fines,
      bank_slip.status,
    );

    return dto;
  }
}

export default GetBankSlipByIdService;
