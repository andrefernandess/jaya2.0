import { EntityRepository, Repository } from 'typeorm';
import BankSlip from '../entities/bankslip';

@EntityRepository(BankSlip)
export class BankSlipRepository extends Repository<BankSlip> {
  public async findByCustomerName(
    customer: string,
  ): Promise<BankSlip | undefined> {
    const bankslip = this.findOne({ where: { customer } });

    return bankslip;
  }
}
