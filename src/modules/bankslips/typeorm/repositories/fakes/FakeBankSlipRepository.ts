import BankSlip from '../../entities/bankslip';
import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';

interface IRequest {
  due_date: Date;
  total_in_cents: number;
  customer: string;
  status: string;
}

class FakeBankSlipRepository {
  private bankSlips: BankSlip[] = [];

  public async create({
    due_date,
    total_in_cents,
    customer,
  }: IRequest): Promise<BankSlip | undefined> {
    const bankslip = new BankSlip();

    bankslip.id = uuidv4();
    bankslip.due_date = due_date;
    bankslip.total_in_cents = total_in_cents;
    bankslip.customer = customer;
    bankslip.status = 'PENDING';

    this.bankSlips.push(bankslip);

    return bankslip;
  }
}

export default FakeBankSlipRepository;
