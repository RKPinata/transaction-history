import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { useTransactionStore } from "@store/transactionStore";
import { formatDate } from "@root/utils/format";
import { COLORS } from "@root/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS["border-primary"],
  },
});

const TransactionDetails = () => {
  const transactionDetail = useTransactionStore(
    (state) => state.transactionDetail
  );

  const getRecipient = () => {
    switch (transactionDetail?.type) {
      case "send":
        return {
          title: "Transfer to",
          description: transactionDetail?.transferTo,
        };
      case "receive":
        return {
          title: "Transfer from",
          description: transactionDetail?.transferFrom,
        };
      default:
        return {
          title: "Merchant",
          description: transactionDetail?.merchant,
        };
    }
  };

  const renderListItem = ({
    title,
    description,
  }: {
    title: string;
    description: string | undefined;
  }) => {
    return (
      <View style={styles.listItem}>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
    );
  };

  return (
    transactionDetail && (
      <View style={styles.container}>
        <Stack.Screen
          options={{
            headerTitle: "Transaction Details",
            headerBackTitleVisible: false,
          }}
        />
        <Text>{transactionDetail.amount}</Text>
        {renderListItem({
          title: "Transaction Type",
          description: transactionDetail.type,
        })}
        {renderListItem(getRecipient())}
        {renderListItem({
          title: "Details",
          description: transactionDetail.description,
        })}
        {renderListItem({
          title: "Date/Time",
          description: formatDate(transactionDetail.date),
        })}
        {renderListItem({
          title: "Transaction ID",
          description: transactionDetail.transactionId,
        })}
      </View>
    )
  );
};
export default TransactionDetails;
