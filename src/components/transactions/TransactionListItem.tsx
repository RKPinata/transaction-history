import { useMemo } from "react";
import { router } from "expo-router";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Transaction } from "@root/models";
import { formatDate } from "@root/utils/format";
import { useTransactionStore } from "@store/transactionStore";
import { COLORS } from "@root/constants";

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
  const setTransactionDetail = useTransactionStore(
    (state) => state.setTransactionDetail
  );

  const {
    description,
    date,
    amount,
    type,
    transferFrom,
    transferTo,
    merchant,
  } = transaction;

  const formattedDate = formatDate(date);
  const resipient = transferFrom || transferTo || merchant;

  const handleShowTransactionDetail = () => {
    setTransactionDetail(transaction);
    router.push("transactions/transaction-details");
  };

  const renderAmount: React.JSX.Element = useMemo(() => {
    if (showAmount) {
      return <Text>{amount > 0 ? `+${amount}` : amount}</Text>;
    }
    return <Text>****</Text>;
  }, [amount, showAmount]);

  const renderIcon: React.JSX.Element = useMemo(() => {
    switch (type) {
      case "send":
        return (
          <MaterialCommunityIcons
            name="arrow-top-right-thick"
            size={24}
            color={COLORS["content-negative"]}
          />
        );
      case "receive":
        return (
          <MaterialCommunityIcons
            name="arrow-bottom-left-thick"
            size={24}
            color={COLORS["content-positive"]}
          />
        );
      default:
        return <SimpleLineIcons name="credit-card" size={24} color="" />;
    }
  }, [type]);

  return (
    <Pressable style={styles.container} onPress={handleShowTransactionDetail}>
      <View>{renderIcon}</View>
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
