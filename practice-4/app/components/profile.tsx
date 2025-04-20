import { View, Image, Text, type ViewProps } from 'react-native';

export default function Profile() {
    const viewProps: ViewProps = {
        style: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },
        accessibilityLabel: 'Profile View',
        testID: 'profile-view',
    };

    return (
        <View style={viewProps}>
            <View style={{ marginBottom: 64, flexDirection: 'column', alignItems: 'center' }}>
                <Image style={{ marginBottom: 8, borderRadius: 180 }} source={require('../../assets/images/profile-image.png')} />
                <Text style={{ fontSize: 32, marginBottom: 8 }}>Name Surname</Text>
                <Text style={{ fontSize: 20 }}>Developer</Text>
            </View>
            <View style={{ marginBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../../assets/images/smartphone-icon.png')} />
                <Text style={{ fontSize: 20, marginLeft: 10 }}>+7 (123) 456-7890</Text>
            </View>
            <View style={{ marginBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../../assets/images/person-icon.png')} />
                <Text style={{ fontSize: 20, marginLeft: 10 }}>@username</Text>
            </View>
            <View style={{ marginBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../../assets/images/email-icon.png')} />
                <Text style={{ fontSize: 20, marginLeft: 10 }}>newmail@gmail.com</Text>
            </View>
        </View>
    );
}