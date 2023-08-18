import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

const ListingDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Image 
            source={require('../assets/jacket.jpg')}
            style={styles.image}
            />
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Red jacket for sale</AppText>
            <AppText style={styles.price}>$100</AppText>
            </View>
            <View style={styles.userContainer}>
            <ListItem
            image={require('../assets/mosh.jpg')}
            title='Mosh Hamedani'
            subtitle='5 listing'
            />
            </View>
        </View>
    )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
container:{
    width:'100%',
    height:'100%',
},
image:{
    width:'100%',
    height:300
},
detailsContainer:{
    padding:20
},
price:{
    color:colors.secondary,
    fontWeight:'bold',
    marginVertical:10
},
title:{
    fontSize:24,
},
userContainer:{
    marginVertical:30
}
})
