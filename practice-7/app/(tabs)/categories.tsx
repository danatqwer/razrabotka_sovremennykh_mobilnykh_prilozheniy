import { Link } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import { usePlaces } from '../../context/PlacesContext';

export default function CategoriesScreen() {
    const state = usePlaces();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {state.categories.map(category => (
                <Link
                    key={category}
                    href={{
                        pathname: "/places/[category]",
                        params: { category }
                    }}
                    asChild
                >
                    <CategoryCard title={category} />
                </Link>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
});