import { Image, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { ThemeProp } from "react-native-paper/lib/typescript/types";
import Country from "../types/types";

export default function PostCard(props: { country: Country, theme?: ThemeProp | undefined }) {
    const { country } = props;

    return (
        <Card mode="contained" style={styles.container} theme={props.theme}>
            <Text style={styles.day}>Day {country.day}</Text>
            <Text style={styles.title}>{country.title}</Text>
            <Image style={styles.image} source={{ uri: country.imageURL }} />
            <Text style={styles.description}>{country.description}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignContent: "center",
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8
    },
    day: {
        marginBottom: 8,
        fontWeight: "bold"
    },
    title: {
        fontSize: 24,
        marginBottom: 8
    },
    image: {
        marginBottom: 8,
        width: "auto",
        height: 200,
    },
    description: {
        fontSize: 16
    }
})