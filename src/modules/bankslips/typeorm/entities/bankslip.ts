import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bank_slips')
class BankSlip {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  due_date: Date;

  @Column()
  payment_date: Date;

  @Column('decimal')
  total_in_cents: number;

  @Column()
  customer: string;

  @Column()
  status: string;
}

export default BankSlip;
