import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, View } from 'react-native';
import PlaceItem from '../../../components/PlaceItem';
import { usePlaces } from '../../../context/PlacesContext';

export default function PlacesScreen() {
    const { category } = useLocalSearchParams();
    const state = usePlaces();

    const placesInCategory = state.places.filter(
        place => place.category === category
    );

    return (
        <View>
            <Stack.Screen
                options={{ title: category.toString() }}
            />
            <ScrollView>
                {placesInCategory.map(place => (
                    <Link
                        key={place.id}
                        href={{
                            pathname: "/places/place/[id]",
                            params: { id: place.id }
                        }}
                        asChild
                    >
                        <PlaceItem place={place} />
                    </Link>
                ))}
            </ScrollView>
        </View>
    );
}