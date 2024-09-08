import { router, Stack } from "expo-router";
import { COLORS } from "@constants/colors";
import splashImage from "@assets/splash-image.png";

import { Text, StyleSheet, Pressable, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootSiblingParent } from "react-native-root-siblings";
import { HomePage } from "@components/home";

const App: React.FC = () => {
  return <HomePage />;
};

export default App;
