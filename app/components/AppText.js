import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'

import defaultStyles from '../config/styles'

const AppText = (props) => <Text 
{...props} 
style={{...defaultStyles.text,...props.style}} 
 >{props.children}</Text>  


export default AppText

