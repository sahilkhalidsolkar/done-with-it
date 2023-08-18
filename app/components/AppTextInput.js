import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'


const AppTextInput = ({ icon, width = '100%', ...props }) => {
  return (
    <View style={[styles.container, { width: width }]}>
      {icon && <MaterialIcons name={icon} size={24} color={colors.medium} style={styles.icon} />}
      <TextInput
        style={defaultStyles.text} {...props}
        placeholderTextColor={colors.medium}
      />
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  // textInput:{
  //     ...Platform.select({
  //         ios:{
  //             // fontSize:18,
  //             fontFamily:'Avenir'

  //         },
  //         android:{
  //             // fontSize:17,
  //             fontFamily:'Roboto'

  //         }
  //     }),
  //     fontSize:18,
  //     color:colors.dark,

  // },
  icon: {
    marginRight: 10,
  }

})