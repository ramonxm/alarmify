import { ActionBar } from "@/components/ActionBar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export const AlarmScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActionBar />
      <View style={{ marginLeft: 16, marginTop: 16 }}>
        <Text style={{ color: "#fff" }}>Alarm</Text>
        <Text style={{ color: "#fff" }}>Sleep | Wake Up</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
