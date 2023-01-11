import BankSlip from '../entities/bankslip';
import { v4 as uuidv4 } from 'uuid';
import { IBankSlipRepository } from '../../interfaces/IBankSlipRepository';
import IBankSlipRequest from '../../interfaces/IRequest';

class FakeBankSlipRepository implements IBankSlipRepository {
  private bankSlips: BankSlip[] = [];

  public async findByCustomerName(
    customerName: string,
  ): Promise<BankSlip | null> {
    const ba = this.bankSlips.find(ba => ba.customer == customerName);

    return null;
  }
  public async update(data: IBankSlipRequest): Promise<BankSlip> {
    return this.bankSlips[0];
  }
  public async findOne(id: string): Promise<BankSlip | null> {
    const ba = this.bankSlips.find(ba => ba.id == id);

    return null;
  }
  public async find(): Promise<BankSlip[]> {
    return this.bankSlips;
  }

  public async create({
    due_date,
    total_in_cents,
    customer,
    status,
  }: IBankSlipRequest): Promise<BankSlip> {
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
