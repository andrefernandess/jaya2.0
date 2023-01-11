import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBankSlipTable1672952734042 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'bank_slips',
        columns: [
          {
            name: `id`,
            type: 'varchar(50)',
            isPrimary: true,
          },
          {
            name: `due_date`,
            type: 'date',
          },
          {
            name: `payment_date`,
            type: 'date',
            isNullable: true,
          },
          {
            name: `total_in_cents`,
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: `customer`,
            type: 'varchar',
          },
          {
            name: `status`,
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('bank_slips');
  }
}
