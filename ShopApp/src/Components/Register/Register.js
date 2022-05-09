import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./Register.style";
import { Alert } from "react-native";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");

  const handleRegister = (email) => {
    let reg =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.length == 0) {
      Alert.alert("Warning", "email address must be enter");
      setEmail("");
    } else if (reg.test(email) == false) {
      Alert.alert("Warning", "email address is not valid");
      setEmail("");
    } else if (reg.test(email) == true) {
      navigation.navigaet("TempPage");
      setEmail("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.texContainer}>
        <TextInput
          value={email}
          placeholder="Enter your E-mail..."
          onChange={(e) => setEmail(e.target.value)}
        />
      </View>
      <View style={styles.Register}>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
