import { Place } from '@/types/types';
import { GestureResponderEvent, Image, ImageSourcePropType, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

const Container = (props: {
    onPress?: ((event: GestureResponderEvent) => void) | null | undefined,
    children: React.ReactNode
}) => {
    const { onPress, children } = props;

    return (
        <Pressable
            onPress={onPress}
            style={styles.card}
        >
            {children}
        </Pressable>
    );
}

const ResponsiveImage = (props: {
    source?: ImageSourcePropType | undefined, isTablet: boolean
}) => {
    const { source, isTablet } = props;

    return (
        <Image
            source={source}
            style={{
                width: isTablet ? 150 : 100,
                height: isTablet ? 150 : 100,
                borderRadius: 4,
            }}
        />
    );
}

export default function PlaceItem(props: {
    onPress?: ((event: GestureResponderEvent) => void) | null | undefined,
    place: Place
}) {
    const { onPress, place } = props;
    const { width } = useWindowDimensions();
    const isTablet = width >= 768;

    return (
        <Container onPress={onPress}>
            <ResponsiveImage
                source={place.imageUrl}
                isTablet={isTablet}
            />
            <View style={styles.col}>
                <Text style={styles.placeName}>{place.name}</Text>
                <Text style={styles.rating}>Рейтинг: {place.rating} ⭐</Text>
            </View>
        </Container>
    );
}



const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 8,
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2
    },
    placeName: {
        fontSize: 16,
        fontWeight: 'bold',
    }, rating: {
        fontSize: 16,
        color: '#444',
    }, col: {
        flex: 1,
        paddingLeft: 8,
    },
});