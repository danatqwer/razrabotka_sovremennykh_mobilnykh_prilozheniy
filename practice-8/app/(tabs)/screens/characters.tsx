import { getCharacters } from '@/api/rick_and_morty_api';
import { Character } from '@/types/types';
import { useNavigation } from 'expo-router';
import { memo, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

type NavigationProps = {
    navigate: (screen: {
        name: string;
        params: { item: string }
    }) => void;
}


const CharactersScreen = memo(
    function CharactersScreen() {
        const navigation = useNavigation<NavigationProps>();

        const [data, setData] = useState<Character[]>([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState('');

        useEffect(() => {
            async function getData() {
                try {
                    await getCharacters().then((characters) => {
                        setData(characters.results)
                    });
                } catch (error) {
                    setError('Failed to fetch data');
                } finally {
                    setLoading(false);
                }
            }
            getData();
        }, []);

        const renderItem = ({ item }: { item: Character }) => {
            item.objectType = 'character';

            return (
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate({ name: 'screens/details', params: { item: JSON.stringify(item) } })}
                >
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                    />
                    <Text style={styles.name}>{item.name}</Text>
                    <Text>Status: {item.status}</Text>
                    <Text>Species: {item.species}</Text>
                </TouchableOpacity>
            );
        }
        if (loading) {
            return <ActivityIndicator style={styles.activityIndicator} size="large" color="#0000ff" />;
        }

        if (error) {
            return <Text>{error}</Text>;
        }

        return (
            <FlatList
                numColumns={2}
                contentContainerStyle={{ gap: 8 }}
                columnWrapperStyle={{ gap: 8 }}
                style={styles.list}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
);

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '48%',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 1,
        padding: 8,
    },
    list: {
        padding: 8,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 6,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 6,
    },
});

export default CharactersScreen;