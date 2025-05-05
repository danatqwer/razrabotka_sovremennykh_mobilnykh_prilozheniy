import { places } from '@/data/places';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function PlaceDetailsScreen() {
    const { id } = useLocalSearchParams();

    const placeDetails = places.find(place => place.id.toString() === id);

    if (placeDetails === undefined) {
        return <Text style={styles.title}>Place not found</Text>;
    }

    return (
        <View>
            <Stack.Screen
                options={{ title: placeDetails.name }}
            />
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={placeDetails.imageUrl}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text style={styles.title}>{placeDetails.name}</Text>
                <Text style={styles.rating}>Рейтинг: {placeDetails.rating} ⭐</Text>
                <Text style={styles.description}>{placeDetails.description}</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    location: {
        fontSize: 16,
        color: '#666',
        marginBottom: 4,
    },
    rating: {
        fontSize: 16,
        color: '#444',
        marginBottom: 12,
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        color: '#333',
    },
    image: {
        width: '100%',
        height: 400,
        borderRadius: 16,
        marginBottom: 16,
    },
});