import React from "react";
import { View, Image } from "react-native";
import styles from "./Login.style";
import { Formik } from "formik";
import { Alert } from "react-native";

import usePost from "../../hooks/usePost/usePost";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

export default function Login({ navigation }) {
  const { data, loading, post, error } = usePost(); //hooks

  function handleLogin(values) {
    post("https://fakestoreapi.com/auth" + "/login", values);
  }
  if (error) {
    Alert.alert("Shop", "Something went wrong");
  }
  if (data) {
    if (data.status === "Error") {
      Alert.alert("Shop", "User not found");
    } else {
      navigation.navigate("ProductsPage");
    }
    console.log(data);
  }
  console.log(data);
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
              iconName="account"
            />

            <Input
              placeholder="enter your password"
              value={values.password}
              onType={handleChange("password")}
              iconName="key"
              isSecure
            />
            <Button
              text="LOGIN"
              onPress={handleSubmit}
              loading={loading}
            ></Button>
          </View>
        )}
      </Formik>
    </View>
  );
}
