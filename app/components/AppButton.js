import React from 'react'
import { StyleSheet, Text ,TouchableOpacity} from 'react-native'
import colors from '../config/colors'

const AppButton = (props) => {
    return (
        <TouchableOpacity style={{...styles.button,...props.style} } onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
button:{
    backgroundColor:colors.primary,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:50,
    borderRadius:23
},
text:{
    color:colors.white,
    fontSize:18,
    fontWeight:'bold',
    textTransform:'uppercase'
}
})
