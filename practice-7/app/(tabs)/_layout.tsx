import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
    initialRouteName="categories"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen name="index" redirect={true} />
    <Stack.Screen name="categories" options={{ headerTitle: "Категорий" }} />
    <Stack.Screen name="places/[category]" />
    <Stack.Screen name="places/place/[id]" />
  </Stack>;
}
