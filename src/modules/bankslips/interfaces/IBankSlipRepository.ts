import BankSlip from '../typeorm/entities/bankslip';
import IRequest from './IRequest';

export interface IBankSlipRepository {
  findByCustomerName(customerName: string): Promise<BankSlip | null>;
  create(data: IRequest): Promise<BankSlip>;
  update(data: IRequest): Promise<BankSlip>;
  findOne(id: string): Promise<BankSlip | null>;
  find(): Promise<BankSlip[]>;
  save(bankSlip: BankSlip): Promise<BankSlip>;
}
