import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CancelBankSlipService from '../services/CancelBankSlipService';
import CreateBankSlipService from '../services/CreateBankSlipService';
import GetBankSlipByIdService from '../services/GetBankSlipByIdService';
import ListBankSlipService from '../services/ListBankSlipsService';
import PayBankSlipService from '../services/PayBankSlipService';
import BankSlipRepository from '../typeorm/repositories/BankSlipRepository';

export default class bankSlipsController {
  public async get(request: Request, response: Response): Promise<Response> {
    const re = new BankSlipRepository();
    const service = new ListBankSlipService(re);

    const slips = await service.execute();

    return response.json(slips);
  }

  public async getById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const re = new BankSlipRepository();
    const service = new GetBankSlipByIdService(re);

    const slip = await service.execute({ id });

    return response.json(slip);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { due_date, total_in_cents, customer } = request.body;
    const status = 'PENDING';
    const re = new BankSlipRepository();
    const service = new CreateBankSlipService(re);

    const bl = await service.execute({
      due_date,
      total_in_cents,
      customer,
      status,
    });

    return response.json(bl);
  }

  public async pay(request: Request, response: Response): Promise<Response> {
    const { payment_date } = request.body;
    const { id } = request.params;
    const re = new BankSlipRepository();
    const service = new PayBankSlipService(re);

    await service.execute({ id, payment_date });

    return response.status(200).json({ message: 'OK' });
  }

  public async cancel(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const re = new BankSlipRepository();
    const service = new CancelBankSlipService(re);

    await service.execute({ id });

    return response.status(204).json({ message: 'Bankslip canceled' });
  }
}
