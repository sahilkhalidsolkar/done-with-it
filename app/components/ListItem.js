import React from 'react'
import { StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from '@expo/vector-icons'


import AppText from '../components/AppText'
import colors from '../config/colors'

const ListItem = ({
    onPress,
    renderRightActions,
    IconComponent,
    image,
    title,
    subtitle,
}) => {
    return (
        <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
            >
  <Swipeable
        renderRightActions={renderRightActions}
        rightOpenValue={-100}>
        <View style={styles.container}>
            {IconComponent}
              { image &&  <Image
                source={image}
                style={styles.image}
                />}
            <View style={styles.detailContainer}>
                <AppText numberOfLines={1}>{title}</AppText>
                {subtitle && <AppText numberOfLines={2} style={styles.title}>{subtitle}</AppText>}
            </View>
            <MaterialCommunityIcons color={colors.medium} style={styles.chevron} name='chevron-right' size={25} />
        </View>
        </Swipeable>
</TouchableHighlight>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:10,
        backgroundColor:colors.white,
        alignItems:'center',
    } ,
    image:{
        width:75,
        height:75,
        borderRadius:40,
        marginLeft:10,
    },
    title:{
        color:colors.medium
    },
    detailContainer:{
        marginLeft:10,
        justifyContent:'center',
        // backgroundColor:'yellow',
        flex:1,
    },
    chevron:{
        marginRight:10,
    }

})
