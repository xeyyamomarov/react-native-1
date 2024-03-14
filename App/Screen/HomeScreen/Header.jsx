import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container} >
      <FontAwesome name="filter" size={26} color="black" />
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end"
    }
})