import { COLORS } from "@root/constants";
import { TransactionList } from "@components/transactions";
import { router, Stack } from "expo-router";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS["border-primary"],
  },
});

const Transactions = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <SafeAreaView>
        <View style={styles.title}>
          <Text>Transactions</Text>
        </View>
        <TransactionList />
      </SafeAreaView>
    </View>
  );
};
export default Transactions;
