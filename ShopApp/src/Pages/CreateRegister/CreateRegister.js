import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./CreateRegister.style";
export default function CreateRegister({ navigation }) {
  const [text, setText] = useState("");

  const handleRegister = () => {
    // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(text).toLowerCase());
    // if (
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    //     String(text).toLowerCase()
    //   )
    // ) {
    //   navigation.navigate("Register");
    //   setText("");
    //   return true;
    // }
    // alert("You have entered an invalid email address!");
    // setText("");
    // return false;
  };
  const handleValidate = () => {
    const reg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = reg.test(String(text).toLowerCase());
    if (result) {
      navigation.navigate("Register");
      setText("");
    } else {
      Alert.alert("Alert", "Email is wrong");
    }
  };
  return (
    <View style={styles.conatiner}>
      <View>
        <Text style={styles.text}>WELCOME</Text>
      </View>
      <View style={styles.horizonText}>
        <TextInput
          style={styles.inputText}
          placeholder="  Enter your email adress..."
          onChange={setText}
          value={text}
        />
        <TouchableOpacity
          onPress={handleValidate}
          style={styles.CreateAccountButton}
        >
          <Text style={styles.innerText}> Create Register Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
