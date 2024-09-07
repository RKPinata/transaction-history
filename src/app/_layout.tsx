import { COLORS } from "@root/constants";
import { Stack } from "expo-router/stack";
import { useColorScheme, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS["background-neutral"],
        },
        headerTintColor: COLORS["content-primary"],
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    ></Stack>
  );
}
