import { Image } from "react-native";
import { Text, Card } from "react-native-paper";
import Country from "../model/country";

function PostCard(props: { country: Country }) {
    const country: Country = props.country;

    return (
        <Card
            mode="contained"
            style={{
                justifyContent: "center",
                alignContent: "center",
                padding: 16,
                marginHorizontal: 16,
                marginVertical: 8
            }}
        >
            <Text
                style={{
                    marginBottom: 4,
                    fontWeight: "bold"
                }}
            >
                Day {country.day}
            </Text>
            <Text
                style={{
                    fontSize: 24,
                    marginBottom: 8
                }}
            >
                {country.title}
            </Text>
            <Image
                style={{
                    marginBottom: 8,
                    aspectRatio: 16 / 9
                }}
                source={{ uri: country.imageURL }}
            />
            <Text style={{ fontSize: 16 }}>
                {country.description}
            </Text>
        </Card>
    );
}

export default PostCard;