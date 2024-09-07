import { mockTransactionHistory } from "@root/mock";

const simulateDelay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

const simulateError = () => {
  if (Math.random() < 0.25) {
    throw new Error("Randomized error occurred");
  }
};

const getTransactionHistory = async () => {
  await simulateDelay();

  try {
    simulateError();
    const response = {
      data: mockTransactionHistory,
      error: null,
    };
    return response;
  } catch {
    return {
      data: null,
      error: "An error occurred while fetching transaction history",
    };
  }
};

export { getTransactionHistory };
