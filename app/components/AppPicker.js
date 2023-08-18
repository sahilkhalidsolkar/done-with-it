import { StyleSheet, FlatList, View, TouchableWithoutFeedback, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import AppText from './AppText'
import PickerItem from './PickerItem'


const AppPicker = ({
    icon,
    width = '100%',
    placeholder,
    selectedItem,
    PickerItemComponent = PickerItem,
    numberOfColumns = 1,
    onSelectItem,
    items,
    ...props

}) => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback
                onPress={() => setModalVisible(true)}
            >
                <View style={[styles.container, { width }]}>
                    {icon && <MaterialCommunityIcons name={icon} size={24} color={colors.medium} style={styles.icon} />}
                    {selectedItem ?
                        <AppText style={styles.text}>{selectedItem}</AppText> :
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    }


                    <MaterialCommunityIcons name='chevron-down' size={24} color={colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal
                visible={modalVisible}
                animationType="slide"
            >
                <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    numColumns={numberOfColumns}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) =>
                        <PickerItemComponent
                            item={item}
                            label={item.label}
                            onPress={() => {
                                setModalVisible(false)
                                onSelectItem(item.label)
                                console.log(item.label)

                            }} />}
                />
            </Modal>
        </>
    )
}

export default AppPicker

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },

    icon: {
        marginRight: 10,
    },
    text: {
        flexGrow: 1,
    },
    placeholder: {
        color: colors.medium,
        flex: 1,
    }


})