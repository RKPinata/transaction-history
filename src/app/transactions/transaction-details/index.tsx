import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { useTransactionStore } from "@store/transactionStore";

const TransactionDetails = () => {
  const transactionDetail = useTransactionStore(
    (state) => state.transactionDetail
  );

  return (
    transactionDetail && (
      <View>
        <Stack.Screen
          options={{
            title: "Transaction Details",
          }}
        />
        <Text>{transactionDetail.description}</Text>
      </View>
    )
  );
};
export default TransactionDetails;
