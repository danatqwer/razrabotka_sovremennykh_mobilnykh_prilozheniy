import { View } from "react-native";
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import CountriesCard from "./components/countries_card";
import Country from "./models/country";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const countries: Country[] = [
  new Country('Kazakhstan', 'Kassym-Jomart Tokayev', 20286084, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/250px-Flag_of_Kazakhstan.svg.png'),
  new Country('United States of America', 'Donald Trump', 340110988, 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png'),
  new Country('Canada', 'Mark Carney', 41528680, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/250px-Flag_of_Canada_%28Pantone%29.svg.png'),
  new Country('Germany', 'Frank-Walter Steinmeier', 83555478, 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png')
];

export default function Index() {
  return (
    <PaperProvider theme={theme}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CountriesCard countries={countries}/>
      </View>
    </PaperProvider>
  );
}
