import { COLORS } from "@root/constants";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  RefreshControl,
  FlatList,
} from "react-native";
import { TransactionListItem } from "./TransactionListItem";
import { useEffect, useState } from "react";
import { getTransactionHistory } from "@services/transaction";
import { Transaction } from "@root/models";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: COLORS["background-primary"],
    borderRadius: 16,
    minHeight: 400,
  },
  listItemSeparator: {
    height: 1,
    backgroundColor: COLORS["border-primary"],
  },
});

const TransactionList = ({}) => {
  const [showAmount, setShowAmount] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<null | Transaction[]>(null);

  const fetchTransactions = async () => {
    try {
      setIsLoading(true);
      const response = await getTransactionHistory();

      setTransactions(response.data);
    } catch (error) {
      // show toast or handle error
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchTransactions();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <>
      <Pressable onPress={() => setShowAmount(!showAmount)}>
        <Text>Show Amount</Text>
      </Pressable>
      <FlatList
        style={styles.listContainer}
        data={transactions}
        keyExtractor={(item) => item.transactionId}
        renderItem={({ item }) => (
          <TransactionListItem transaction={item} showAmount={showAmount} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ItemSeparatorComponent={() => <View style={styles.listItemSeparator} />}
        ListEmptyComponent={
          <View style={{ padding: 20, alignItems: "center" }}>
            <Text>No transactions available.</Text>
          </View>
        }
      />
    </>
  );
};

export { TransactionList };
