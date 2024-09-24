import { ActionBar } from "@/components/ActionBar";
import { View, StyleSheet, SafeAreaView } from "react-native";

export default function Stopwatch() {
  return (
    <SafeAreaView style={styles.container}>
      <ActionBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
