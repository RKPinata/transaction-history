import { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, RefreshControl, FlatList } from "react-native";
import Toast from "react-native-root-toast";
import { Flow } from "react-native-animated-spinkit";
import { COLORS } from "@root/constants";
import { getTransactionHistory } from "@services/transaction";
import { Transaction } from "@root/models";
import { TransactionListItem } from "../TransactionListItem/TransactionListItem";

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: COLORS["background-primary"],
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS["border-primary"],
    minHeight: 400,
  },
  listItemSeparator: {
    height: 1,
    backgroundColor: COLORS["border-primary"],
  },
  emptyListLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyListText: {
    marginTop: 16,
    fontSize: 16,
    color: COLORS["content-primary"],
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
      showErrorToast();
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchTransactions();
    setRefreshing(false);
  };

  const showErrorToast = () => {
    Toast.show("Error occured! Please retry", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      backgroundColor: COLORS["content-negative"],
      textStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: COLORS["content-primary"],
      },
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const renderEmptyList = useMemo(() => {
    if (isLoading)
      return (
        <View style={styles.emptyListLoading}>
          <Flow size={48} color={COLORS["content-accent"]}></Flow>
        </View>
      );

    return (
      <View style={styles.emptyList}>
        <Text style={styles.emptyListText}>No transactions found</Text>
      </View>
    );
  }, [isLoading]);

  return (
    <>
      <FlatList
        style={styles.listContainer}
        contentContainerStyle={{ flexGrow: 1 }}
        data={transactions}
        keyExtractor={(item) => item.transactionId}
        refreshControl={
          <RefreshControl
            refreshing={transactions.length > 0 ? refreshing : false}
            onRefresh={onRefresh}
          />
        }
        renderItem={({ item }) => <TransactionListItem transaction={item} />}
        ItemSeparatorComponent={() => <View style={styles.listItemSeparator} />}
        ListEmptyComponent={renderEmptyList}
      />
    </>
  );
};

export { TransactionList };
