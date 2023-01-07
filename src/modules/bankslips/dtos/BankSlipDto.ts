export class BankSlipDto {
  constructor(
    public id: string,
    public due_date: Date,
    public paymant_date: Date,
    public total_in_cents: number,
    public customer: string,
    public fines: number,
    public status: string,
  ) {}
}
