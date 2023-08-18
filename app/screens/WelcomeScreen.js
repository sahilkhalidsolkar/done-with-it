import React from 'react'
import {
    StyleSheet, ImageBackground, Image,
    View, Text, StatusBar, Platform
} from 'react-native'


import colors from '../config/colors'
import AppButton from '../components/AppButton'

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                blurRadius={2}
                source={require('../assets/background.jpg')}
                resizeMode='cover'
                style={styles.background}
            >
                <View style={styles.contentContainer}>
                    <View style={styles.upper}>
                        <Image
                            source={require('../assets/logo-red.png')}
                            style={styles.logo}
                        />
                        <Text style={styles.tagline}>Sell What you Don't need</Text>
                    </View>
                    <View style={styles.lower}>
                        <AppButton title='Login' onPress={() => console.log('Tapped')} />
                        <AppButton title='Register' style={styles.register} onPress={() => console.log('Tapped')} />
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    background: {
        width: '100%',
        height: '100%'
    },
    contentContainer: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1
    },
    logo: {
        width: 100,
        height: 100,
    },
    upper: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
    },

    lower: {
        alignItems: 'center',
        justifyContent: "flex-end",
        flex: 1,
        padding: 20,
    },
    register: {
        backgroundColor: colors.secondary,
        marginTop: 15
    },
    tagline: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 15
    }


})
