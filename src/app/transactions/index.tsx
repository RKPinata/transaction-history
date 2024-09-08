import { router, Stack } from "expo-router";
import { Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@root/constants";
import { TransactionList } from "@components/transactions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    paddingVertical: 32,
  },
});

const Transactions = () => {
  return (
    <>
      <Stack.Screen
        options={{
          gestureEnabled: false,
          headerBackVisible: false,
          headerTitle: "",
          headerStyle: {
            backgroundColor: COLORS["content-accent"],
          },
          headerRight: () => (
            <Pressable
              onPress={() => {
                router.back();
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Logout</Text>
            </Pressable>
          ),
        }}
      />
      <SafeAreaView
        style={styles.container}
        edges={["bottom", "left", "right"]}
      >
        <Text style={styles.title}>Transactions</Text>
        <TransactionList />
      </SafeAreaView>
    </>
  );
};
export default Transactions;
