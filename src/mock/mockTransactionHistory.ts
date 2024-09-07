import { Transaction } from "@root/models";

const mockTransactionHistory: Transaction[] = [
  {
    amount: 150.0,
    date: "2024-09-01T00:00:00Z",
    description: "Salary Payment",
    type: "receive",
    transferFrom: "Employer",
    transactionId: "txn001",
  },
  {
    amount: -45.99,
    date: "2024-09-02T00:00:00Z",
    description: "Grocery Store",
    type: "payment",
    merchant: "Walmart",
    transactionId: "txn002",
  },
  {
    amount: -120.0,
    date: "2024-09-03T00:00:00Z",
    description: "Electricity Bill",
    type: "payment",
    merchant: "Utility Company",
    transactionId: "txn003",
  },
  {
    amount: -200.0,
    date: "2024-09-04T00:00:00Z",
    description: "Rent Payment",
    type: "payment",
    merchant: "Landlord",
    transactionId: "txn004",
  },
  {
    amount: 300.0,
    date: "2024-09-05T00:00:00Z",
    description: "Freelance Project",
    type: "receive",
    transferFrom: "Client",
    transactionId: "txn005",
  },
  {
    amount: -25.0,
    date: "2024-09-06T00:00:00Z",
    description: "Transfer to Savings",
    type: "send",
    transferTo: "Savings Account",
    transactionId: "txn006",
  },
  {
    amount: 100.0,
    date: "2024-09-07T00:00:00Z",
    description: "Gift Received",
    type: "receive",
    transferFrom: "Friend",
    transactionId: "txn007",
  },
  {
    amount: -60.0,
    date: "2024-09-08T00:00:00Z",
    description: "Dinner Out",
    type: "payment",
    merchant: "Restaurant",
    transactionId: "txn008",
  },
  {
    amount: -50.0,
    date: "2024-09-09T00:00:00Z",
    description: "Gas Station",
    type: "payment",
    merchant: "Shell",
    transactionId: "txn009",
  },
  {
    amount: 200.0,
    date: "2024-09-10T00:00:00Z",
    description: "Loan Received",
    type: "receive",
    transferFrom: "Bank",
    transactionId: "txn010",
  },
  {
    amount: -75.0,
    date: "2024-09-11T00:00:00Z",
    description: "Online Shopping",
    type: "payment",
    merchant: "Amazon",
    transactionId: "txn011",
  },
  {
    amount: -100.0,
    date: "2024-09-12T00:00:00Z",
    description: "Car Maintenance",
    type: "payment",
    merchant: "Auto Shop",
    transactionId: "txn012",
  },
  {
    amount: 50.0,
    date: "2024-09-13T00:00:00Z",
    description: "Birthday Gift",
    type: "receive",
    transferFrom: "Family",
    transactionId: "txn013",
  },
  {
    amount: -35.0,
    date: "2024-09-14T00:00:00Z",
    description: "Cinema Tickets",
    type: "payment",
    merchant: "Cinema",
    transactionId: "txn014",
  },
  {
    amount: -90.0,
    date: "2024-09-15T00:00:00Z",
    description: "Transfer to Credit Card",
    type: "send",
    transferTo: "Credit Card",
    transactionId: "txn015",
  },
  {
    amount: 400.0,
    date: "2024-09-16T00:00:00Z",
    description: "Bonus Received",
    type: "receive",
    transferFrom: "Employer",
    transactionId: "txn016",
  },
  {
    amount: -55.0,
    date: "2024-09-17T00:00:00Z",
    description: "Clothing Store",
    type: "payment",
    merchant: "Zara",
    transactionId: "txn017",
  },
  {
    amount: -150.0,
    date: "2024-09-18T00:00:00Z",
    description: "Transfer to Investment Account",
    type: "send",
    transferTo: "Investment Account",
    transactionId: "txn018",
  },
  {
    amount: 30.0,
    date: "2024-09-19T00:00:00Z",
    description: "Cashback Received",
    type: "receive",
    transferFrom: "Credit Card",
    transactionId: "txn019",
  },
  {
    amount: -70.0,
    date: "2024-09-20T00:00:00Z",
    description: "Gym Membership",
    type: "payment",
    merchant: "Gym",
    transactionId: "txn020",
  },
];

export { mockTransactionHistory };
