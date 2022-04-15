import React from "react";
import { Text, View, TextInput } from "react-native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import Image from "./Image";
import styles from "./Add.style";
//image benim componentim tag değil!!!!!!!
export default function Add() {
  return (
    <View style={styles.container}>
      <Text>Add a product!</Text>
      <View style={styles.image}>
        <Image style={styles.image}></Image>
        <EvilIcons name="image" size={85} color="black" />
      </View>
      <View style={styles.title}>
        <TextInput placeholder="Title"></TextInput>
        <MaterialIcons name="title" size={20} color="#000" />
      </View>
      <View style={styles.price}>
        <TextInput placeholder="Price" />
        <Ionicons name="ios-pricetags" size={20} color="#000" />
      </View>
      <View style={styles.category}>
        <TextInput placeholder="Category" />
        <MaterialIcons name="category" size={20} color="#000" />
      </View>
      <View style={styles.desc}>
        <TextInput placeholder="Description" />
        <MaterialIcons name="description" size={20} color="#000" />
      </View>
    </View>
  );
}
