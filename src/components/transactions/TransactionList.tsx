import { COLORS } from "@root/constants";
import { mockTransactionHistory } from "@root/mock";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { TransactionListItem } from "./TransactionListItem";
import { useEffect, useImperativeHandle, useState } from "react";
import { getTransactionHistory } from "@services/transaction";
import { Transaction } from "@root/models";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS["background-primary"],
    borderRadius: 16,
  },
});

const TransactionList = ({}) => {
  const [showAmount, setShowAmount] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [transactions, setTransactions] = useState<null | Transaction[]>(null);

  useEffect(() => {
    async () => {
      try {
        setIsLoading(true);
        const response = await getTransactionHistory();

        setTransactions(response.data);
      } catch (error) {
        // show toast
      } finally {
        setIsLoading(false);
      }
    };
  }, []);

  return (
    <>
      <Pressable onPress={() => setShowAmount(!showAmount)}>
        <Text>Show Amount</Text>
      </Pressable>
      <View style={styles.container}>
        <TransactionListItem
          transaction={{} as Transaction}
          showAmount={showAmount}
        />
      </View>
    </>
  );
};
export { TransactionList };
