import { getEpisodes } from '@/api/rick_and_morty_api';
import { Episode } from '@/types/types';
import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
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

const EpisodesScreen = () => {
    const navigation = useNavigation<NavigationProps>();

    const [data, setData] = useState<Episode[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getData() {
            try {
                await getEpisodes().then((data) => {
                    setData(data.results)
                });
            } catch (error) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, []);

    const renderItem = ({ item }: { item: Episode }) => {
        item.objectType = 'episode';

        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate({ name: 'screens/details', params: { item: JSON.stringify(item) } })}
            >
                <Text style={styles.name}>{item.name}</Text>
                <Text>Episode: {item.episode}</Text>
                <Text>Air date: {item.air_date}</Text>
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
            contentContainerStyle={{ gap: 12 }}
            style={styles.list}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 1,
        padding: 16,
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
    },
});

export default EpisodesScreen;