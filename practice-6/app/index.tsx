import { View, FlatList } from "react-native";
import { PaperProvider, Appbar } from "react-native-paper";
import Country from "./model/country";
import Theme from "./theme";
import PostCard from "./components/post-card";

const countriesData: Country[] = [
  new Country(1, "Kazakhstan", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/250px-Flag_of_Kazakhstan.svg.png", "Nostrud ipsum consectetur ex nulla consequat ad magna nisi minim quis incididunt eu id voluptate.Aliquip excepteur voluptate enim ad occaecat ea exercitation elit exercitation.Et magna irure duis culpa laboris ea aliqua velit excepteur elit ipsum cupidatat sint qui.Tempor laboris velit nisi sunt excepteur tempor magna ipsum.Reprehenderit elit do ad in veniam nulla mollit laborum in deserunt incididunt.Minim voluptate ipsum cillum ipsum magna cupidatat labore enim esse aliquip est minim excepteur."),
  new Country(2, "USA", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png", "Nostrud ipsum consectetur ex nulla consequat ad magna nisi minim quis incididunt eu id voluptate.Aliquip excepteur voluptate enim ad occaecat ea exercitation elit exercitation.Et magna irure duis culpa laboris ea aliqua velit excepteur elit ipsum cupidatat sint qui.Tempor laboris velit nisi sunt excepteur tempor magna ipsum.Reprehenderit elit do ad in veniam nulla mollit laborum in deserunt incididunt.Minim voluptate ipsum cillum ipsum magna cupidatat labore enim esse aliquip est minim excepteur."),
  new Country(3, "Canada", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/250px-Flag_of_Canada_%28Pantone%29.svg.png", "Nostrud ipsum consectetur ex nulla consequat ad magna nisi minim quis incididunt eu id voluptate.Aliquip excepteur voluptate enim ad occaecat ea exercitation elit exercitation.Et magna irure duis culpa laboris ea aliqua velit excepteur elit ipsum cupidatat sint qui.Tempor laboris velit nisi sunt excepteur tempor magna ipsum.Reprehenderit elit do ad in veniam nulla mollit laborum in deserunt incididunt.Minim voluptate ipsum cillum ipsum magna cupidatat labore enim esse aliquip est minim excepteur."),
]

export default function Index() {
  return (
    <PaperProvider theme={Theme} >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Theme.colors.background
        }}
      >
        <FlatList
          data={countriesData}
          renderItem={({ item }: { item: Country }) => <PostCard country={item} />}
        />
      </View>
    </PaperProvider>
  );
}