import { ActionBar } from "@/components/ActionBar";

import { StyleSheet, SafeAreaView, View, Text } from "react-native";

export default function Alarm() {
  return (
    <SafeAreaView style={styles.container}>
      <ActionBar />
      <View style={{ marginLeft: 16, marginTop: 16 }}>
        <Text style={{ color: "#fff" }}>Alarm</Text>
        <Text style={{ color: "#fff" }}>Sleep | Wake Up</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
