import { CountriesDatabase } from "@/data/database";
import { CountryModel } from "@/models/models";
import RouteNames from "@/routes/route_names";
import { Country } from "@/types/types";
import { Button } from "@react-navigation/elements";
import { Link, useFocusEffect } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { useCallback, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CountriesScreen() {
    const [data, setData] = useState<CountryModel[] | null>();
    let name: string | undefined = undefined;

    const databaseContext = useSQLiteContext();
    const database = new CountriesDatabase(databaseContext);
    //

    async function fetch() {
        try {
            await database.initialize();
            const countries = await database.countriesTable.getAll();
            setData(countries);
        } catch (error) {
            console.error(error);
        }
    }

    useFocusEffect(
        useCallback(() => {
            fetch();
        }, [])
    );

    async function search(name: string) {
        try {
            name = name;
            const countries = await database.countriesTable.getAllBy('name', name)
            setData(countries);
        } catch (error) {
            console.log(error);
        }
    };

    if (data === null || data === undefined) {
        return (
            <Text style={styles.null}>Country is not loaded.</Text>
        )
    }


    return (
        <View>
            <TextInput
                placeholder="Search by name"
                value={name}
                onChangeText={async (text) => {
                    await search(text);
                }}
                style={styles.input}
            />
            <Link
                href={RouteNames.countryFormAddPathName}
                asChild
            >
                <Button style={{ margin: 16 }}>Add Country</Button>
            </Link>
            <ScrollView>
                {data.map((item) => <CountryItem country={item} />)}  
            </ScrollView>
        </View >
    );
}

function CountryItem(props: { country: Country }) {
    const { country } = props;
    const { name, population, gdp } = country;

    return (
        <View style={styles.container}>
            <Link
                href={{
                    pathname: RouteNames.countryDetailsPathName,
                    params: {
                        id: country.id
                    }
                }}
                asChild
            >
                <TouchableOpacity>
                    <Text style={styles.name}>{name}</Text>
                    <Text>Population: {population}</Text>
                    <Text>GDP: ${gdp}</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        marginBottom: 8,
        margin: 16
    },
    container: {
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        elevation: 1,
        padding: 16,
        borderRadius: 16,
        marginHorizontal: 16,
        marginVertical: 6,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    null: {
        fontSize: 16,
        justifyContent: 'center',
        alignContent: 'center'
    }
})