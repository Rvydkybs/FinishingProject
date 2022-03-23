import React from "react";
import { View, Image } from "react-native";
import styles from "./Login.style";
import { Formik } from "formik";
import { Alert } from "react-native";
import AsyncStorageLib from "@react-native-async-storage/async-storage"; //kullanıcı kaydını bellekte tutmak için
import usePost from "../../hooks/usePost/usePost";
import { useDispatch } from "react-redux";

import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

export default function Login({ navigation }) {
  const { data, loading, post, error } = usePost(); //hooks
  const dispatch = useDispatch();

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
      dispatch({ type: "SET_USER", payload: { user } });
      navigation.navigate("Login", { screen: "ProductsPage" });
    }
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

const user = {
  address: {
    geolocation: { lat: "-37.3159", long: "81.1496" },
    city: "kilcoole",
    street: "new road",
    number: 7682,
    zipcode: "12926-3874",
  },
  id: 1,
  email: "john@gmail.com",
  username: "johnd",
  password: "m38rmF$",
  name: { firstname: "john", lastname: "doe" },
  phone: "1-570-236-7033",
  __v: 0,
};
