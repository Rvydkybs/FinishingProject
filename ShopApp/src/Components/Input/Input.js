import React, { useEffect } from "react";
import { View, TextInput } from "react-native";
import styles from "./Input.style";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Input({
  placeholder,
  onType,
  value,
  iconName,
  isSecure,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure} //paswordü hashli göstermek için
      />
      <Icons name={iconName} size={30} />
    </View>
  );
}
