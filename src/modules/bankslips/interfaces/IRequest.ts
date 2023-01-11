interface IBankSlipRequest {
  due_date: Date;
  total_in_cents: number;
  customer: string;
  status: string;
}

export default IBankSlipRequest;
