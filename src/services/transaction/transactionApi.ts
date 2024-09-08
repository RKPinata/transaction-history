import { mockTransactionHistory } from "@root/mock";

const simulateDelay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

const simulateError = () => {
  // error happens 25% of the time
  if (Math.random() < 0.25) {
    throw new Error("Randomized error occurred");
  }
};

const getTransactionHistory = async () => {
  await simulateDelay();

  simulateError();
  const response = {
    data: mockTransactionHistory,
    error: null,
  };

  return response;
};

export { getTransactionHistory };
