import { FlatList, ViewStyle } from "react-native";
import { PaperProvider, Appbar } from "react-native-paper";
import Country from "./model/country";
import Theme from "./theme";
import PostCard from "./components/post-card";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <PaperProvider theme={Theme} >
      <MainAppBar />
      <MainBody />
    </PaperProvider>
  );
}

function MainAppBar() {
  return (
    <Appbar.Header>
      <Appbar.Content title='30 Days of Countries' />
    </Appbar.Header>
  );
}


function MainBody() {
  const countriesData: Country[] = [
    new Country(1, "Kazakhstan", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/250px-Flag_of_Kazakhstan.svg.png", "Kazakhstan is the largest landlocked country in the world. It shares borders with Russia, China, Kyrgyzstan, Uzbekistan, and Turkmenistan."),
    new Country(2, "USA", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png", "The USA is the third most populous country in the world and has the largest economy by nominal GDP."),
    new Country(3, "Canada", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/250px-Flag_of_Canada_%28Pantone%29.svg.png", "Canada has the longest coastline of any country in the world."),
    new Country(4, "Brazil", "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/250px-Flag_of_Brazil.svg.png", "Brazil is the largest country in South America and the fifth largest in the world by area."),
    new Country(5, "Australia", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/250px-Flag_of_Australia_%28converted%29.svg.png", "Australia is the only country that is also a continent."),
    new Country(6, "India", "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/250px-Flag_of_India.svg.png", "India is the world's largest democracy by population."),
    new Country(7, "Russia", "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png", "Russia is the largest country in the world by land area."),
    new Country(8, "China", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/250px-Flag_of_the_People%27s_Republic_of_China.svg.png", "China has the largest population in the world."),
    new Country(9, "Japan", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/250px-Flag_of_Japan.svg.png", "Japan is made up of over 6,800 islands."),
    new Country(10, "Germany", "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png", "Germany is the most populous country in the European Union."),
    new Country(11, "France", "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png", "France is the most visited country in the world by international tourists."),
    new Country(12, "Italy", "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/250px-Flag_of_Italy.svg.png", "Italy is home to more UNESCO World Heritage Sites than any other country."),
    new Country(13, "United Kingdom", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/250px-Flag_of_the_United_Kingdom_%281-2%29.svg.png", "The UK was the first country to industrialize."),
    new Country(14, "Mexico", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/250px-Flag_of_Mexico.svg.png", "Mexico introduced chocolate, corn, and chili peppers to the world."),
    new Country(15, "South Korea", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/250px-Flag_of_South_Korea.svg.png", "South Korea has the world’s fastest internet speeds."),
    new Country(16, "Argentina", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/250px-Flag_of_Argentina.svg.png", "Argentina is the birthplace of the tango dance."),
    new Country(17, "Spain", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/250px-Flag_of_Spain.svg.png", "Spain is home to the world's oldest restaurant still in operation, founded in 1725."),
    new Country(18, "Egypt", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/250px-Flag_of_Egypt.svg.png", "Egypt is home to one of the world’s oldest civilizations."),
    new Country(19, "Turkey", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/250px-Flag_of_Turkey.svg.png", "Istanbul, Turkey, is the only city in the world spanning two continents."),
    new Country(20, "Saudi Arabia", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/250px-Flag_of_Saudi_Arabia.svg.png", "Saudi Arabia is home to Mecca, the holiest city in Islam."),
    new Country(21, "Indonesia", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/250px-Flag_of_Indonesia.svg.png", "Indonesia is made up of over 17,000 islands."),
    new Country(22, "Thailand", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/250px-Flag_of_Thailand.svg.png", "Thailand is the only Southeast Asian country that was never colonized by a European power."),
    new Country(23, "Norway", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/250px-Flag_of_Norway.svg.png", "Norway is consistently ranked as one of the happiest countries in the world."),
    new Country(24, "Sweden", "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/250px-Flag_of_Sweden.svg.png", "Sweden is famous for its strong welfare system and high quality of life."),
    new Country(25, "Finland", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/250px-Flag_of_Finland.svg.png", "Finland has been ranked the happiest country in the world several times."),
    new Country(26, "Denmark", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/120px-Flag_of_Denmark.svg.png", "Denmark is home to the oldest continuously used national flag."),
    new Country(27, "Switzerland", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/250px-Flag_of_Switzerland_%28Pantone%29.svg.png", "Switzerland has four national languages: German, French, Italian, and Romansh."),
    new Country(28, "Greece", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/250px-Flag_of_Greece.svg.png", "Greece is considered the cradle of Western civilization and democracy."),
    new Country(29, "Netherlands", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/250px-Flag_of_the_Netherlands.svg.png", "About a third of the Netherlands lies below sea level."),
    new Country(30, "South Africa", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/250px-Flag_of_South_Africa.svg.png", "South Africa has three capital cities: Pretoria, Bloemfontein, and Cape Town.")
  ]

  const mainViewStyle: ViewStyle = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.colors.background
  };

  const renderItem = ({ item }: { item: Country; }) => {
    return <PostCard country={item} />;
  }

  return (
    <SafeAreaView style={mainViewStyle}>
      <FlatList data={countriesData} renderItem={renderItem} />
    </SafeAreaView>);
}
