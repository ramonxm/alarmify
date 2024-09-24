import { ActionBar } from "@/components/ActionBar";
import { StyleSheet, SafeAreaView } from "react-native";

export default function Timer() {
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
