import { View } from "react-native";

import Profile from "@/components/profile";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Profile />
    </View>
  );
}
