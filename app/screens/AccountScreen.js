import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeperator from '../components/ListItemSeperator'

const menuItems = [
    {
        id: '1',
        title: "My Listings",
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary,
        }
    },
    {
        id: '2',
        title: "My Messages",
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
        }
    }
]

const AccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Mosh Hamedani"
                    subtitle="programmingwithmosh@gmail.com"
                    image={require('../assets/mosh.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menu => menu.id}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) => <ListItem
                        title={item.title}
                        IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                    />}
                />
            </View>
            <View style={styles.container}>
                <ListItem
                    title="Log Out"
                    IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
                />
            </View>
        </Screen>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    }
})