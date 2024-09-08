import { useMemo, useState } from "react";
import { router } from "expo-router";
import * as LocalAuthentication from "expo-local-authentication";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { View, Text, Pressable } from "react-native";
import { Transaction } from "@root/models";
import { formatDate } from "@root/utils/format";
import { useTransactionStore } from "@store/transactionStore";
import { COLORS } from "@root/constants";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { contentStyles, styles } from "./TransactionListItem.styles";

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

  const handleShowAmount = async () => {
     if (!showAmount) {
      const { success } = await LocalAuthentication.authenticateAsync({});
      
      if (success) {
        setShowAmount(true);
      }
    } else {
      setShowAmount(false);
    }
  }

  const renderAmount: React.JSX.Element = useMemo(() => {
    if (showAmount) {
      return (
        <Text style={styles.amount}>{amount > 0 ? `+${amount}` : amount}</Text>
      );
    }
    return <Text style={styles.hiddenAmount}>****</Text>;
  }, [amount, showAmount]);

  const renderShowAmountIcon: React.JSX.Element = useMemo(() => {
    if (showAmount) {
      return (
        <Entypo name="eye" size={18} color={COLORS["content-secondary"]} />
      );
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
      <View style={styles.leftContent}>
        <View style={styles.iconWrapper}>{renderIcon}</View>
      </View>
      <View style={styles.middleContent}>
        <Text style={contentStyles.contentDate}>{formattedDate}</Text>
        <Text style={contentStyles.contentDescription}>{description}</Text>
        <Text style={contentStyles.contentRecipient}>{recipient}</Text>
      </View>
      <View style={styles.rightContent}>
        <View style={styles.amountContainer}>
          {renderAmount}
          <Pressable style={styles.eyeIcon} onPress={handleShowAmount}>
            {renderShowAmountIcon}
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};
export { TransactionListItem };
