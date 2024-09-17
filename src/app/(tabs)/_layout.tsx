import { Alarm } from "@/assets/svgs/Alarm";
import { Stopwatch } from "@/assets/svgs/Stopwatch";
import { Timer } from "@/assets/svgs/Timer";
import { WorldClock } from "@/assets/svgs/WorldClock";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#F4B657",
        tabBarInactiveTintColor: "#9B9B9B",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "World Clock",
          tabBarIcon: ({ color }) => <WorldClock color={color} />,
        }}
      />
      <Tabs.Screen
        name="alarm"
        options={{
          title: "Alarm",
          tabBarIcon: ({ color }) => <Alarm color={color} />,
        }}
      />
      <Tabs.Screen
        name="stopwatch"
        options={{
          title: "Stopwatch",
          tabBarIcon: ({ color }) => <Stopwatch color={color} />,
        }}
      />
      <Tabs.Screen
        name="timer"
        options={{
          title: "Timer",
          tabBarIcon: ({ color }) => <Timer color={color} />,
        }}
      />
    </Tabs>
  );
}
