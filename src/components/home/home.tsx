import { router, Stack } from "expo-router";
import { COLORS } from "@constants/colors";
import splashImage from "@assets/splash-image.png";

import { Text, StyleSheet, Pressable, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cta: {
    backgroundColor: COLORS["content-accent"],
    borderRadius: 999,
    height: 200,
    width: 200,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  ctaText: {
    color: COLORS["content-primary-alt"],
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const HomePage: React.FC = () => {
  return (
    <ImageBackground source={splashImage} style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SafeAreaView>
        <Pressable
          style={styles.cta}
          onPress={() => {
            router.push("transactions");
          }}
        >
          <Text style={styles.ctaText}>View{"\n"}Transactions</Text>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
};

export { HomePage };
