import { Image, ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Text, Card } from "react-native-paper";
import Country from "../model/country";

function PostCard(props: { country: Country }) {
    const mainCardStyle: ViewStyle = {
        justifyContent: "center",
        alignContent: "center",
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8
    };
    const dayTextStyle: TextStyle = {
        marginBottom: 8,
        fontWeight: "bold"
    };
    const titleTextStyle: TextStyle = {
        fontSize: 24,
        marginBottom: 8
    };
    const imageStyle: ImageStyle = {
        marginBottom: 8,
        width: "auto",
        height: 180
    };
    const descriptionTextStyle = {
        fontSize: 16
    };

    const country: Country = props.country;

    return (
        <Card mode="contained" style={mainCardStyle}>
            <Text style={dayTextStyle}>Day {country.day}</Text>
            <Text style={titleTextStyle}>{country.title}</Text>
            <Image style={imageStyle} source={{ uri: country.imageURL }} />
            <Text style={descriptionTextStyle}>{country.description}</Text>
        </Card>
    );
}

export default PostCard;