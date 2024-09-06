import { mockTransactionHistory } from "@root/mock";

const simulateDelay = () => {
  return new Promise(() => {
    setTimeout(() => {}, 500);
  });
};

const getTransactionHistory = async () => {
  await simulateDelay();
  const response = mockTransactionHistory;

  return response;
};
