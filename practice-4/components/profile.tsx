import { Image, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={{ marginBottom: 8, borderRadius: 180 }} source={require('../../assets/images/profile-image.png')} />
                <Text style={{ fontSize: 20 }}>Developer</Text>
            </View>
            <View style={styles.infoContainer}>
                <Image source={require('../../assets/images/smartphone-icon.png')} />
                <Text style={styles.rightText}>+7 (123) 456-7890</Text>
            </View>
            <View style={styles.infoContainer}>
                <Image source={require('../../assets/images/person-icon.png')} />
                <Text style={styles.rightText}>@username</Text>
            </View>
            <View style={styles.infoContainer}>
                <Image source={require('../../assets/images/email-icon.png')} />
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