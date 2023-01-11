import { dataSource } from '@shared/typeorm';
import { Repository } from 'typeorm';
import BankSlip from '../entities/bankslip';
import { IBankSlipRepository } from './interfaces/IBankSlipRepository';
import IBankSlipRequest from './interfaces/IRequest';

class BankSlipRepository implements IBankSlipRepository {
  private ormRepository: Repository<BankSlip>;

  constructor() {
    this.ormRepository = dataSource.getRepository(BankSlip);
  }

  findByCustomerName(customer: string): Promise<BankSlip | null> {
    const bankslip = this.ormRepository.findOneBy({
      customer,
    });

    return bankslip;
  }

  public async create({
    due_date,
    total_in_cents,
    customer,
    status,
  }: IBankSlipRequest): Promise<BankSlip | null> {
    const bankslip = this.ormRepository.create({
      due_date,
      total_in_cents,
      customer,
      status,
    });

    await this.ormRepository.save(bankslip);

    return bankslip;
  }

  public findOne(id: string): Promise<BankSlip | null> {
    const bankslip = this.ormRepository.findOneBy({ id });

    return bankslip;
  }

  public find(): Promise<BankSlip[] | null> {
    const bls = this.ormRepository.find();

    return bls;
  }

  public async save(bankSlip: BankSlip): Promise<BankSlip> {
    await this.ormRepository.save(bankSlip);

    return bankSlip;
  }

  async update(bankSlip: BankSlip): Promise<BankSlip | null> {
    await this.ormRepository.save(bankSlip);

    return bankSlip;
  }
}

export default BankSlipRepository;
