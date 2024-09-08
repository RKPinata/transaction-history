import { StyleSheet } from "react-native";
import { COLORS } from "@root/constants";

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

export { styles, contentStyles };