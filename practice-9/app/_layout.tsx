import { CountriesDatabase } from "@/data/database";
import RouteNames from "@/routes/route_names";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

export default function RootLayout() {
  return (
    <SQLiteProvider
      databaseName={CountriesDatabase.databaseName}
      // onInit={async (db) => await new CountriesDatabase(db).initialize()}
    >
      <Stack initialRouteName={RouteNames.countriesRoute}>
        <Stack.Screen name={RouteNames.indexRoute} redirect />
        <Stack.Screen name={RouteNames.countriesRoute} options={{ title: 'Countries' }} />
        <Stack.Screen name={RouteNames.countryDetailsRoute} options={{ title: 'Country Details' }} />
        <Stack.Screen name={RouteNames.countryFormAddRoute} options={{ title: 'Add Country' }} />
        <Stack.Screen name={RouteNames.countryFormEditRoute} options={{ title: 'Edit Country' }} />
      </Stack >
    </SQLiteProvider>
  );
}
