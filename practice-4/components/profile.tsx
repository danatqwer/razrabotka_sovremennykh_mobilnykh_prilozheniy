import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={{ marginBottom: 8, borderRadius: 180 }} source={require('@/assets/images/profile_image.png')} />
                <Text style={{ fontSize: 20 }}>Danat E.</Text>
            </View>
            <View style={styles.infoContainer}>
                <MaterialIcons name={"smartphone"} color={'#000000'} size={24}/>
                <Text style={styles.rightText}>+7 (123) 456-7890</Text>
            </View>
            <View style={styles.infoContainer}>
                <MaterialIcons name={'person'} color={'#000000'} size={24}/>
                <Text style={styles.rightText}>@username</Text>
            </View>
            <View style={styles.infoContainer}>
                <MaterialIcons name={'email'} color={'#000000'} size={24}/>
                <Text style={styles.rightText}>newmail@gmail.com</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        marginBottom: 64,
        flexDirection: 'column',
        alignItems: 'center'
    },
    infoContainer: {
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightText: {
        fontSize: 20,
        marginLeft: 10
    }
})