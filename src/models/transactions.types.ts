export type TransactionType = "send" | "receive" | "payment";

export type Transaction = {
  amount: number;
  date: string;
  description: string;
  type: TransactionType;
  merchant?: string;
  transferTo?: string;
  transferFrom?: string;
  transactionId: string;
};

