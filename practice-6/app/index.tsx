import { FlatList, StyleSheet, View } from "react-native";

import PostCard from "@/components/post-card";
import { countriesData } from "@/data/data";
import Theme from "@/theme/theme";
import Country from "@/types/types";
import { useTheme } from "react-native-paper";

export default function Index() {
  const theme = useTheme()

  return (
    <View style={styles.container}>
      <FlatList
        data={countriesData}
        renderItem={({ item }: { item: Country; }) => <PostCard country={item} theme={theme} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.colors.background
  }
});