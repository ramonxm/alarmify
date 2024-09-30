import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { useColorScheme } from "../hooks/useColorScheme";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded, error] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter/Inter-Black.ttf"),
    "Inter-Thin": require("../assets/fonts/Inter/Inter-Thin.ttf"),
    "Inter-ExtraLight": require("../assets/fonts/Inter/Inter-ExtraLight.ttf"),
    "Inter-Light": require("../assets/fonts/Inter/Inter-Light.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter/Inter-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter/Inter-SemiBold.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("../assets/fonts/Inter/Inter-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar barStyle="default" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
