import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { Plus } from "@/assets/svgs/Plus";

export const ActionBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ThemedText style={styles.text}>Done</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity>
        <Plus />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#F4B657",
  },
});
