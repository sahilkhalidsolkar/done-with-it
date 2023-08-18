import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import colors from '../config/colors';

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={styles.container}>
        <Feather name="trash-2" size={35} color="white" />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ListItemDeleteAction

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  }
})