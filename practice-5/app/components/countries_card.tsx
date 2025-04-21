import { View, Image } from "react-native";
import { useState } from 'react';
import { Tooltip, Button, Text, Card } from 'react-native-paper';
import Country from "../models/country";

function CountryCard(props: { country: Country, onPreviousPress: () => any, onNextPress: () => any }) {
    const country = props.country;
    const onPreviousPress = props.onPreviousPress;
    const onNextPress = props.onNextPress;

    return <Card style={{ padding: 16 }}>
        <Image source={{ uri: country.imageURL.toString(), }}
            style={{ width: "auto", height: 150, resizeMode: 'contain', marginBottom: 8 }} />
        <Text style={{ marginBottom: 8 }}>Title: {country.title}</Text>
        <Text style={{ marginBottom: 8 }}>President: {country.president}</Text>
        <Text style={{ marginBottom: 8 }}>Population: {country.population.toString()}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ width: 120 }}>
                <Tooltip title="Previous country">
                    <Button onPress={onPreviousPress}>Previous</Button>
                </Tooltip>
            </View>
            <View style={{ width: 120, marginLeft: 8 }}>
                <Tooltip title="Next country">
                    <Button onPress={onNextPress}>Next</Button>
                </Tooltip>
            </View>
        </View>
    </Card>
}

function CountriesCard(props: { countries: Country[] }) {
    let [index, setIndex] = useState(0);
    let country = props.countries[index];

    const onPreviousPress = () => index > 0 ? setIndex(index - 1) : alert('Countries ended');
    const onNextPress = () => index < props.countries.length - 1 ? setIndex(index + 1) : alert('Countries ended');

    return <CountryCard country={country} onPreviousPress={onPreviousPress} onNextPress={onNextPress} />
}

export default CountriesCard;