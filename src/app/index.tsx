import { router, Stack } from "expo-router";
import { COLORS } from "@constants/colors";
import splashImage from "@assets/splash-image.png";

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
        <Pressable onPress={() => {
          router.push('transactions')
        }}>
          <Text>View Transactions</Text>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomePage;
