import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const NavLink = ({text,onsubmit}) => {
    return (
          <TouchableOpacity  onPress={onsubmit}>
                <Text style={styles.textnavi}>{text}</Text>
            </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    textnavi:{
        marginHorizontal:25,
        marginVertical:10,
        color:'#5f27cd'
        
    }
})
export default NavLink;
