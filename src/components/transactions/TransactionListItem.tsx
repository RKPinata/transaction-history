import { useMemo, useState } from "react";
import { router } from "expo-router";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Transaction } from "@root/models";
import { formatDate } from "@root/utils/format";
import { useTransactionStore } from "@store/transactionStore";
import { COLORS } from "@root/constants";
import { FontAwesome } from "expo-vector-icons";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
  },
  leftContent: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  middleContent: {
    flex: 1,
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  amount: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    color: COLORS["content-primary"],
  },
  hiddenAmount: {
    fontSize: 18,
    lineHeight: 24,
    color: COLORS["content-secondary"],
  },
  iconWrapper: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: COLORS["background-neutral"],
  },
  eyeIcon: {
    marginRight: 8,
  },
});

const contentStyles = StyleSheet.create({
  contentDate: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS["content-primary"],
  },
  contentDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS["content-secondary"],
  },
  contentRecipient: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    color: COLORS["content-secondary"],
  },
});

type TransactionListItemProps = {
  transaction: Transaction;
};

const TransactionListItem: React.FC<TransactionListItemProps> = ({
  transaction,
}) => {
  const [showAmount, setShowAmount] = useState<boolean>(false);

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
  const recipient = transferFrom || transferTo || merchant;

  const handleShowTransactionDetail = () => {
    setTransactionDetail(transaction);
    router.push("transactions/transaction-details");
  };

  const renderAmount: React.JSX.Element = useMemo(() => {
    if (showAmount) {
      return <Text style={styles.amount}>{amount > 0 ? `+${amount}` : amount}</Text>;
    }
    return <Text style={styles.hiddenAmount}>****</Text>;
  }, [amount, showAmount]);

  const renderShowAmountIcon: React.JSX.Element = useMemo(() => {
    if (showAmount) {
      return <Entypo name="eye" size={18} color={COLORS["content-secondary"]} />;
    }
    return (
      <Entypo
        name="eye-with-line"
        size={18}
        color={COLORS["content-secondary"]}
      />
    );
  }, [showAmount]);

  const renderIcon: React.JSX.Element = useMemo(() => {
    switch (type) {
      case "send":
        return (
          <Feather
            name="arrow-up-right"
            size={32}
            color={COLORS["content-negative"]}
          />
        );
      case "receive":
        return (
          <Feather
            name="arrow-down-left"
            size={32}
            color={COLORS["content-positive"]}
          />
        );
      default:
        return (
          <EvilIcons
            name="credit-card"
            size={32}
            color={COLORS["content-secondary"]}
          />
        );
    }
  }, [type]);

  return (
    <Pressable style={styles.container} onPress={handleShowTransactionDetail}>
      <View style={styles.leftContent}><View style={styles.iconWrapper}>{renderIcon}</View></View>
      <View style={styles.middleContent}>
        <Text style={contentStyles.contentDate}>{formattedDate}</Text>
        <Text style={contentStyles.contentDescription}>{description}</Text>
        <Text style={contentStyles.contentRecipient}>{recipient}</Text>
      </View>
      <View style={styles.rightContent}>
        <View style={styles.amountContainer}>
          {renderAmount}
          <Pressable
            style={styles.eyeIcon}
            onPress={() => setShowAmount(!showAmount)}
          >
            {renderShowAmountIcon}
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};
export { TransactionListItem };
