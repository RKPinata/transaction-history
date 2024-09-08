import { COLORS } from "@root/constants";
import { Stack } from "expo-router/stack";
import { useColorScheme, View } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";


export default function RootLayout() {
  return (
    <RootSiblingParent>
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
    </RootSiblingParent>
  );
}
