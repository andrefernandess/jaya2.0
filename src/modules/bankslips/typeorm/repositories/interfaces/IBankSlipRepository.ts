import BankSlip from '../../entities/bankslip';
import IRequest from './IRequest';

export interface IBankSlipRepository {
  findByCustomerName(customerName: string): Promise<BankSlip | null>;
  create(data: IRequest): Promise<BankSlip | null>;
  update(data: IRequest): Promise<BankSlip | null>;
  findOne(id: string): Promise<BankSlip | null>;
  find(): Promise<BankSlip[] | null>;
  save(bankSlip: BankSlip): Promise<BankSlip>;
}
