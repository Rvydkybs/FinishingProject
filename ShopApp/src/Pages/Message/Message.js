import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./Message.style";

export default function Message(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Messages</Text>
      {props ? <Text>props</Text> : <Text>There is no message for you </Text>}
    </View>
  );
}
