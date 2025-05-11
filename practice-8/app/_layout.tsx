import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="(tabs)">
      <Stack.Screen
        name="index"
        redirect
      />
      <Stack.Screen
        name="(tabs)"
        options={{ header: () => null }}
      />
      <Stack.Screen name="screens/details" />
    </Stack>
  );
}
