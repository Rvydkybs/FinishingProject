import { Alert, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import styles from "./CreateRegister.style";

export default function CreateRegister({ navigation }) {
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(true);

  const validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setCheck(false);
      setEmail(text);
      return false;
    } else {
      setCheck(true);
      setEmail(text);
    }
  };
  const handleValidate = () => {
    if (check === false || email === "") {
      {
        !check
          ? Alert.alert("Warning!", "Email is Not Correct")
          : Alert.alert("Warning!", "Please enter a email adress");
      }
    } else navigation.navigate("Register");
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
          onChangeText={(text) => validate(text)}
          value={email}
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
