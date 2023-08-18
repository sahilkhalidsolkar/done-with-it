import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeperator from '../components/ListItemSeperator'
import Screen from '../components/Screen'

const MessageScreen = () => {
    const initialMessage = [
        {
            id: 1,
            title: 'T1 ',
            description: 'D1 ',
            image: require('../assets/mosh.jpg')
        },
        {
            id: 2,
            title: 'T2',
            description: 'D2',
            image: require('../assets/mosh.jpg')
        },
        {
            id: 3,
            title: 'T3',
            description: 'D3',
            image: require('../assets/mosh.jpg')
        }
    ]
    const [messages, setMessage] = useState(initialMessage)
    const [refreshing, setRefreshing] = useState(false)







    // delete the message
    const handleDelete = (delMessage) => {
        console.log(delMessage)
        // delete from message
        setMessage(messages.filter(message => message.id !== delMessage.id))
        // delete from server

    }

    return (
        <Screen>
            <View>
                <FlatList
                    data={messages}
                    keyExtractor={message => message.id.toString()}
                    renderItem={({ item }) => <ListItem
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        onPress={() => console.log("message Selected")}
                        renderRightActions={() => <ListItemDeleteAction
                            onPress={() => handleDelete(item)}

                        />}
                    />}
                    ItemSeparatorComponent={ListItemSeperator}
                    refreshing={refreshing}
                    onRefresh={
                        () => {
                            setRefreshing(true)
                            setMessage([{
                                id: 3,
                                title: 'T3',
                                description: 'D3',
                                image: require('../assets/mosh.jpg')
                            }])
                            setRefreshing(false)


                        }
                    }
                />
            </View>
        </Screen>
    )
}
const styles = StyleSheet.create({})

export default MessageScreen


