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
import { useEffect, useMemo, useState } from "react";
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<[] | Transaction[]>([]);

  const fetchTransactions = async () => {
    try {
      setIsLoading(true);
      const response = await getTransactionHistory();

      if (response.data) {
        setTransactions(response.data);
      }
    } catch (error) {
      // handle error
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

  const renderEmptyList = useMemo(() => {
    if (isLoading) return null;
    return (
      <View>
        <Text>No transactions found</Text>
      </View>
    );
  }, [isLoading]);

  return (
    <>
      <FlatList
        style={styles.listContainer}
        data={transactions}
        keyExtractor={(item) => item.transactionId}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => <TransactionListItem transaction={item} />}
        ItemSeparatorComponent={() => <View style={styles.listItemSeparator} />}
        ListEmptyComponent={() => renderEmptyList}
      />
    </>
  );
};

export { TransactionList };
