import { ActionBar } from "@/components/ActionBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBox, createText } from "@shopify/restyle";

const Box = createBox();
const Text = createText();

export const AlarmScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} backgroundColor="background">
        <ActionBar />
        <Box marginLeft="s" marginTop="s">
          <Text variant="body" color="text">
            Alarm
          </Text>
          <Text variant="body" color="text">
            Sleep | Wake Up
          </Text>
        </Box>
      </Box>
    </SafeAreaView>
  );
};
