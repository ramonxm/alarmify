import { ActionBar } from "@/components/ActionBar";
import { SafeAreaView, StyleSheet } from "react-native";

export const WorldClockScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActionBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
