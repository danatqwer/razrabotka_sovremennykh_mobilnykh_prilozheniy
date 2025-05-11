import { CountriesDatabase } from '@/data/database';
import { ContinentModel, CountryModel } from '@/models/models';
import { Picker } from '@react-native-picker/picker';
import { router, useLocalSearchParams } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CountryFormEditScreen() {
    const [country, setCountry] = useState<CountryModel>();
    const [continents, setContinents] = useState<ContinentModel[]>([]);

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [population, setPopulation] = useState<string>('');
    const [area, setArea] = useState<string>('');
    const [gdp, setGdp] = useState<string>('');
    const [continentId, setContinentId] = useState<number>(0);

    const { id } = useLocalSearchParams();

    const databaseContext = useSQLiteContext();
    const database = new CountriesDatabase(databaseContext);

    useEffect(() => {
        async function fetchCountry() {
            const country = await database.countriesTable.getBy('id', id);

            if (country !== null) {
                setCountry(country)
                setName(country.name);
                setDescription(country.description);
                setPopulation(country.population.toString());
                setArea(country.area.toString());
                setGdp(country.gdp.toString());
                setContinentId(country.continent_id);
            }
        }
        async function fetchContinents() {
            const continents = await database.continentsTable.getAll();
            setContinents(continents);
        }
        fetchCountry()
        fetchContinents();
    }, [])

    async function handleSubmit() {
        const isFieldsValid = !name || !description || !population
            || !area || !gdp || !continentId;

        if (isFieldsValid) {
            alert('Please fill out all fields with valid data.');
            return;
        }
        if (country !== undefined) {
            await database.countriesTable.updateBy(new CountryModel(
                country.id,
                name,
                description,
                Number(population),
                Number(area),
                Number(gdp),
                Number(continentId),
                country.created_at,
                country.continent_name
            ), 'id', id);
            router.back();
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Country Name</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter country name"
            />

            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
                placeholder="Enter description"
            />

            <Text style={styles.label}>Population</Text>
            <TextInput
                style={styles.input}
                value={population}
                onChangeText={setPopulation}
                placeholder="Enter population"
            />

            <Text style={styles.label}>Area</Text>
            <TextInput
                style={styles.input}
                value={area}
                onChangeText={setArea}
                placeholder="Enter area"
            />

            <Text style={styles.label}>GDP</Text>
            <TextInput
                style={styles.input}
                value={gdp}
                onChangeText={setGdp}
                placeholder="Enter GDP"
            />

            <Text style={styles.label}>Continent</Text>
            <Picker
                selectedValue={continentId}
                onValueChange={(itemValue) => setContinentId(itemValue)}
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
