import { GestureResponderEvent, Pressable, StyleSheet, Text } from "react-native";

export default function CategoryCard(props: {
    title: string,
    onPress?: ((event: GestureResponderEvent) => void) | null | undefined,
}) {
    const { title, onPress } = props;

    return (
        <Pressable
            onPress={onPress}
            style={styles.card}
        >
            <Text style={styles.title}>{title}</Text>
        </Pressable >
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 8,
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});