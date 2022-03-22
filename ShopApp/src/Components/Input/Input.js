import React from "react";
import { View, TextInput } from "react-native";
import styles from "./Input.style";

export default function Input({ placeholder, onType, value }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
      />
    </View>
  );
}
