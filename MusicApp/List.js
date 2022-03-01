import React, { useState } from 'react';
import { View ,Text} from 'react-native';
import { StyleSheet } from 'react-native';

export default function List({props,press}) {
  return (
        press 
        ?
        <View style={styles.container} >
                <Text style={styles.text}>{props.title}</Text>
        </View>
        :
        <View style={styles.container}>
                <Text style={styles.pressedContainer}>{props.title}</Text>
        </View>
  )
  
}

const styles=StyleSheet.create({
    container:{
        marginBottom:10,
        borderRadius:10,
        borderColor:"#caffb5",
        backgroundColor:"#caffb5",
        padding:5,
        height:50,
        margin:5,
        marginTop:10,
    },
    text:{
        fontSize:18,
        marginLeft:20,
    },
    pressedContainer:{
        textDecorationLine: 'line-through',
    }
})