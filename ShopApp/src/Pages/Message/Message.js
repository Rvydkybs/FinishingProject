import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import styles from "./Message.style";

export default function Message(props) {
  return (
    <View style={styles.container}>
      {props.message ? (
        <Text>{props.message}</Text>
      ) : (
        <View>
          <Text style={styles.text}>There is no message for you </Text>
          <Image
            style={styles.image}
            source={require("../../assets/sad.jpg")}
          />
        </View>
      )}
    </View>
  );
}
