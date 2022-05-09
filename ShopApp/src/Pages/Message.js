import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Message({ message }) {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
