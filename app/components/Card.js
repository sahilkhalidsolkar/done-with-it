import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

import colors from '../config/colors'
import AppText from './AppText'

const Card = (props) => {
    return (
        <View style={styles.outercontainer}>
            <View style={styles.container}>
            <Image
            source={props.image}
            style={styles.image}
            />
            <View style={styles.detailContainer}>
                <AppText numberOfLines={1} >{props.title}</AppText>
                <AppText numberOfLines={1} style={styles.subtitle}>{props.subtitle}</AppText>
            </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container:{
        borderRadius:15,
        backgroundColor:colors.white,
        width:'100%',
        overflow:'hidden',
    },
    outercontainer:{
        padding:10,
    },
    image:{
        width:'100%',
        height:250,

    },
    detailContainer:{
        alignItems:'flex-start',
        padding:20

    },
    subtitle:{
        color:colors.secondary,
        fontWeight:'bold'
    }
})
