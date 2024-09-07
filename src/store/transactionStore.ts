import { Transaction } from "@root/models";
import { create } from "zustand";

type TransactionState = {
  transactionDetail: Transaction | null;
};

type TransactionAction = {
  setTransactionDetail: (transaction: Transaction) => void;
};

type TransactionStore = TransactionState & TransactionAction;

const useTransactionStore = create<TransactionStore>((set) => ({
  transactionDetail: null,
  setTransactionDetail: (transaction: Transaction) => {
    set({ transactionDetail: transaction });
  },
}));

export { useTransactionStore };
