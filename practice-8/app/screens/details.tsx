import { Character, Episode, Location } from "@/types/types";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

function CharacterDetails(props: { character: Character }) {
    const { character } = props;
    const { id, name, status, species, type, gender, origin, location, image, episode, url, created } = character;

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: image }}
                style={styles.image}
            />
            <Text style={styles.name}>Name: {name}</Text>
            <Text style={styles.text}>Id: {id}</Text>
            <Text style={styles.text}>Status: {status}</Text>
            <Text style={styles.text}>Species: {species}</Text>
            <Text style={styles.text}>Type: {type}</Text>
            <Text style={styles.text}>Gender: {gender}</Text>
            <Text style={styles.text}>Origin: {origin.name}</Text>
            <Text style={styles.text}>Location: {location.name}</Text>
            <Text style={styles.text}>Episode: {episode.map((e) => e.replace('https://rickandmortyapi.com/api/episode/', '')).join(", ")}</Text>
            <Text style={styles.text}>URL: {url}</Text>
            <Text style={styles.text}>Created: {created}</Text>
        </View>
    );
}

function LocationDetails(props: { location: Location }) {
    const { location } = props;
    const { id, name, type, dimension, residents, url, created } = location;

    return (
        <View style={styles.container}>
            <Text style={styles.name}>Name: {name}</Text>
            <Text style={styles.text}>Id: {id}</Text>
            <Text style={styles.text}>Type: {type}</Text>
            <Text style={styles.text}>Dimension: {dimension}</Text>
            <Text style={styles.text}>Residents: {residents.join(", ")}</Text>
            <Text style={styles.text}>URL: {url}</Text>
            <Text style={styles.text}>Created: {created}</Text>
        </View>
    );

}
function EpisodeDetails(props: { episode: Episode }) {
    const { episode } = props;
    const { id, name, air_date, episode: episodeCode, characters, url, created } = episode;

    return (
        <View style={styles.container}>
            <Text style={styles.name}>Name: {name}</Text>
            <Text style={styles.text}>Id: {id}</Text>
            <Text style={styles.text}>Air date: {air_date}</Text>
            <Text style={styles.text}>Episode: {episodeCode}</Text>
            <Text style={styles.text}>Characters: {characters.join(", ")}</Text>
            <Text style={styles.text}>URL: {url}</Text>
            <Text style={styles.text}>Created: {created}</Text>
        </View>
    );
}

export default function DetailsScreen() {
    const params = useLocalSearchParams();
    const item = params.item as string;

    const itemTyped = item ? JSON.parse(item) as Character | Location | Episode : null;

    if (!itemTyped) {
        return <Text>No item found</Text>;
    }

    const Component = () => {
        switch (itemTyped.objectType) {
            case "character":
                return <CharacterDetails character={itemTyped as Character} />;
            case "location":
                return <LocationDetails location={itemTyped as Location} />;
            case "episode":
                return <EpisodeDetails episode={itemTyped as Episode} />;
        }
    }
    return (
        <View>
            <Stack.Screen options={{ title: itemTyped.name }} />
            <Component />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        elevation: 1,
        padding: 8,
    },
    image: {
        width: "100%",
        height: 400,
        borderRadius: 6,
    },
    name: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 6,
    },
    text: {
        fontSize: 14,
    },
});
