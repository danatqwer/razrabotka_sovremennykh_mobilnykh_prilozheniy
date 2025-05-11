import { CountriesDatabase } from "@/data/database";
import { CountryModel } from "@/models/models";
import RouteNames from "@/routes/route_names";
import { Button } from "@react-navigation/elements";
import { Link, router, Stack, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CountryDetailsScreen() {
    const [country, setCountry] = useState<CountryModel | null>(null);

    const databaseContext = useSQLiteContext();
    const database = new CountriesDatabase(databaseContext);

    const { id } = useLocalSearchParams();

    async function fetch() {
        try {
            const country = await database.countriesTable.getBy('id', Number(id));
            setCountry(country);
        } catch (error) {
            console.error(error);
        }
    }

    useFocusEffect(
        useCallback(() => {
            fetch();
        }, [])
    );


    async function deleteCountry() {
        await database.countriesTable.deleteBy('id', Number(id));
        router.back();
    }

    if (country === null || country === undefined) {
        return (
            <Text style={styles.null}>Country is not loaded.</Text>
        )
    }

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{ title: country.name }}
            />
            <Text style={styles.name}>{country.name}</Text>
            <Text>Id: {country.id}</Text>
            <Text>Population: {country.population}</Text>
            <Text>Area: {country.area}</Text>
            <Text>GDP: ${country.gdp}</Text>
            <Text>Continent Id: {country.continent_id ?? 'undefined'}</Text>
            <Text>Continent Name: {country.continent_name}</Text>
            <Text>Created At: {country.created_at}</Text>
            <Text>Description: {country.description}</Text>
            <Link
                href={{
                    pathname: RouteNames.countryFormEditPathName,
                    params: {
                        id: country.id
                    }
                }}
                asChild
            >
                <Button style={styles.btn} >Edit</Button>
            </Link>
            <Button style={styles.btn} onPressIn={deleteCountry}>Delete</Button>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        elevation: 1,
        padding: 16,
        borderRadius: 16,
        marginHorizontal: 16,
        marginVertical: 6
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    null: {
        fontSize: 16,
        justifyContent: 'center',
        alignContent: 'center'
    },
    btn: {
        margin: 5
    }
})