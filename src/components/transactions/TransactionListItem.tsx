import { View, Text, StyleSheet, Pressable } from "react-native";
import { Transaction } from "@root/models";
import { formatDate } from "@root/utils/format";
import { useMemo } from "react";

const mockTransaction = {
  amount: 150.0,
  date: "2024-09-01T00:00:00Z",
  description: "Salary Payment",
  type: "receive",
  transferFrom: "Employer",
  transactionId: "txn001",
} as Transaction;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
  },
});

type TransactionListItemProps = {
  transaction: Transaction;
  showAmount: boolean;
};

const TransactionListItem: React.FC<TransactionListItemProps> = ({
  transaction,
  showAmount,
}) => {
  const {
    description,
    date,
    amount,
    type,
    transferFrom,
    transferTo,
    merchant,
  } = mockTransaction;

  const formattedDate = formatDate(date);
  const resipient = transferFrom || transferTo || merchant;

  const renderAmount: React.JSX.Element = useMemo(() => {
    if (showAmount) {
      return <Text>{amount > 0 ? `+${amount}` : amount}</Text>;
    }
    return <Text>****</Text>;
  }, [amount, showAmount]);

  return (
    <Pressable style={styles.container} onPress={() => {
      console.log(mockTransaction.transactionId);
    }}>
      <Text>icon</Text>
      <View>
        <Text>{formattedDate}</Text>
        <Text>{description}</Text>
        <Text>{resipient}</Text>
      </View>
      {renderAmount}
    </Pressable>
  );
};
export { TransactionListItem };
