import React from "react";
import { View, Text } from "react-native";
import { useDispatch, createStore, useSelector } from "react-redux";

export default function Profile({ user }) {
  //const userInformation = useSelector((s) => s.user);
  console.log(user);

  return <View>{user && <Text>{user.username}</Text>}</View>;
}
