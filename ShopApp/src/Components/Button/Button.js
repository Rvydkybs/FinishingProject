import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";
import styles from "./Button.style";

export default function Button({ text, onPress, loading }) {
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={loading}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.title}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
