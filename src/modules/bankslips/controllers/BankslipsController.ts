import { Request, Response } from 'express';
import CancelBankSlipService from '../services/CancelBankSlipService';
import CreateBankSlipService from '../services/CreateBankSlipService';
import GetBankSlipByIdService from '../services/GetBankSlipByIdService';
import ListBankSlipService from '../services/ListBankSlipsService';
import PayBankSlipService from '../services/PayBankSlipService';

export default class bankSlipsController {
  public async get(request: Request, response: Response): Promise<Response> {
    const service = new ListBankSlipService();

    const slips = await service.execute();

    return response.json(slips);
  }

  public async getById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const service = new GetBankSlipByIdService();

    const slip = await service.execute({ id });

    return response.json(slip);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { due_date, total_in_cents, customer } = request.body;
    const status = 'PENDENTE';
    const service = new CreateBankSlipService();

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

    const service = new PayBankSlipService();

    await service.execute({ id, payment_date });

    return response.status(200).json({ message: 'OK' });
  }

  public async cancel(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = new CancelBankSlipService();

    await service.execute({ id });

    return response.status(204).json({ message: 'Bankslip canceled' });
  }
}
