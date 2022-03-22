import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./Button.style";

export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
}
