import React from "react";
import { View, Text, Image } from "react-native";
import Button from "../../Components/Button/Button";
import styles from "./Login.style";
import { Formik } from "formik";
import Input from "../../Components/Input/Input";

export default function Login() {
  function handleLogin(values) {
    console.log(values);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/s.png")} />
      </View>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleLogin}
      >
        {({ handleSubmit, handleChange, values }) => (
          <View style={styles.body}>
            <Input
              placeholder="enter user name"
              value={values.username}
              onType={handleChange("username")}
            />
            <Input
              placeholder="enter your password"
              value={values.password}
              onType={handleChange("password")}
            />
            <Button text="ENTER" onPress={handleSubmit}></Button>
          </View>
        )}
      </Formik>
    </View>
  );
}
