import React from 'react';
import { View,TextInput ,Text} from 'react-native';
import styles from "./Input.style";

export default function Input({label,onChangeText,placeholder}) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
           <TextInput placeholder={placeholder} onChangeText={onChangeText}></TextInput>
        </View>

    </View>
  )
}
