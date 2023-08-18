import React from 'react'
import { StyleSheet, View, Platform, StatusBar, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors'
import AppText from '../components/AppText'

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>

                <View style={styles.close}>
                    <AntDesign name="close" size={35} color="white" />
                </View>
                <View style={styles.delete}>
                    <AntDesign name="delete" size={35} color="white" />
                </View>

                <Image
                    resizeMode='contain'
                    source={require('../assets/couch.jpg')}
                    style={styles.image}
                />
            </View>
        </View>
    )
}

export default ViewImageScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    contentContainer: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
    },
    close: {

        position: 'absolute',
        top: 30,
        left: 10
    },
    delete: {

        position: 'absolute',
        top: 30,
        right: 10
    },

})
