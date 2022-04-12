import React from "react";
import { View, Text } from "react-native";
import { useDispatch, createStore, useSelector } from "react-redux";

export default function Profile(data) {
  console.log(data);

  return <View>{data && <Text>{data.username}</Text>}</View>;
}
