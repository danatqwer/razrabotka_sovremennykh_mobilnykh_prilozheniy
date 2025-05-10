import { Stack } from "expo-router";
import { Appbar, PaperProvider } from "react-native-paper";
import Theme from "../theme/theme";

export default function RootLayout() {
  return (
    <PaperProvider theme={Theme} >
      <Stack
        initialRouteName="index"
        screenOptions={{
          header: () => (
            <Appbar.Header>
              <Appbar.Content title='30 Days of Countries' />
            </Appbar.Header>
          )
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </PaperProvider>
  );
}
