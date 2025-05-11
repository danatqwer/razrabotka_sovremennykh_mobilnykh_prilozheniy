import { CountriesDatabase } from '@/data/database';
import { ContinentModel, CountryModel } from '@/models/models';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CountryFormAddScreen() {
    const [country, setCountry] = useState<CountryModel>(
        new CountryModel(0, '', '', 0, 0, 0, 0, '')
    );
    const [continents, setContinents] = useState<ContinentModel[]>([]);

    const databaseContext = useSQLiteContext();
    const database = new CountriesDatabase(databaseContext);

    useEffect(() => {
        async function fetch() {
            const continents = await database.continentsTable.getAll();
            setContinents(continents);
        }
        fetch();
    }, [])

    function handleSubmit() {
        const isFieldsValid = !country.name || !country.description
            || country.population <= 0 || country.area <= 0
            || country.gdp <= 0 || country.continent_id <= 0;

        if (isFieldsValid) {
            alert('Please fill out all fields with valid data.');
            return;
        }

        database.countriesTable.insert(country);
        router.back();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Country Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setCountry(country?.copyWith({ name: text }))}
                placeholder="Enter country name"
            />

            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setCountry(country?.copyWith({ description: text }))}
                placeholder="Enter description"
            />

            <Text style={styles.label}>Population</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setCountry(country?.copyWith({ population: Number(text) }))}
                placeholder="Enter population"
            />

            <Text style={styles.label}>Area</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setCountry(country?.copyWith({ area: Number(text) }))}
                placeholder="Enter area"
            />

            <Text style={styles.label}>GDP</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setCountry(country?.copyWith({ gdp: Number(text) }))}
                placeholder="Enter GDP"
            />

            <Text style={styles.label}>Continent</Text>
            <Picker
                selectedValue={country.continent_id}
                onValueChange={(itemValue) => setCountry(country?.copyWith({ continent_id: Number(itemValue) }))}
                style={styles.input}
            >
                {continents.map((continent) => (
                    <Picker.Item key={continent.id} label={continent.name} value={continent.id} />
                ))}
            </Picker>
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
});
