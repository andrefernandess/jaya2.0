import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('bank_slips')
class BankSlip {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  due_date: Date;

  @CreateDateColumn({ nullable: true })
  payment_date: Date;

  @Column('decimal')
  total_in_cents: number;

  @Column('varchar')
  customer: string;

  @Column('varchar')
  status: string;
}

export default BankSlip;
