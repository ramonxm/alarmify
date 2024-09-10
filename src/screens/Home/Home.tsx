import { View } from "react-native";
import { styles } from "./styles";
import { Stack } from "expo-router";
import { Image } from 'expo-image';
import { useThemeColor } from "@/hooks/useThemeColor";


const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const Home = () => {
  const backgroundColor = useThemeColor(
    { light: undefined, dark: undefined },
    "background"
  );

  return (
    <>
      <Stack.Screen
        options={{ title: "Home", headerStyle: { backgroundColor } }}
      />
      <View style={styles.container}>

      <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      </View>
    </>
  );
};
