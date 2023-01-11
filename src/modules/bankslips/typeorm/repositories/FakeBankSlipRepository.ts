import BankSlip from '../entities/bankslip';
import { v4 as uuidv4 } from 'uuid';
import { IBankSlipRepository } from './interfaces/IBankSlipRepository';
import IBankSlipRequest from './interfaces/IRequest';

interface IRequest {
  due_date: Date;
  total_in_cents: number;
  customer: string;
  status: string;
}

class FakeBankSlipRepository implements IBankSlipRepository {
  findByCustomerName(customerName: string): Promise<BankSlip | null> {
    throw new Error('Method not implemented.');
  }
  update(data: IBankSlipRequest): Promise<BankSlip | null> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<BankSlip | null> {
    throw new Error('Method not implemented.');
  }
  find(): Promise<BankSlip[] | null> {
    throw new Error('Method not implemented.');
  }
  private bankSlips: BankSlip[] = [];

  public async create({
    due_date,
    total_in_cents,
    customer,
    status,
  }: IBankSlipRequest): Promise<BankSlip | null> {
    const bankslip = new BankSlip();

    bankslip.id = uuidv4();
    bankslip.due_date = due_date;
    bankslip.total_in_cents = total_in_cents;
    bankslip.customer = customer;
    bankslip.status = status;

    this.bankSlips.push(bankslip);

    return bankslip;
  }

  public async save(bankslip: BankSlip): Promise<BankSlip> {
    Object.assign(this.bankSlips, bankslip);

    return bankslip;
  }
}

export default FakeBankSlipRepository;
