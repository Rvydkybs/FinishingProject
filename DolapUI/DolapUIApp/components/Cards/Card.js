import React from 'react';
import{View,Text,TouchableOpacity,Button,Alert} from "react-native";
import styles from "./Card.style";

export default function Card(props) {
  return (
    <View style={styles.container}>
        <View style={styles.body}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>{Alert.alert("HELLO "+props.title)}}>
            <Text style={styles.button_title}>I LIKED</Text>
        </TouchableOpacity>
    </View>
  )
}
