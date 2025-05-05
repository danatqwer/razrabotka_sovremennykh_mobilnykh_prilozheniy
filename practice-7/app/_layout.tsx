import { PlacesProvider } from "@/context/PlacesContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <PlacesProvider>
      <Stack
        initialRouteName="(tabs)"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" redirect={true} />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </PlacesProvider>
  );
}
