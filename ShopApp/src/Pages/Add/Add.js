import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import Image from "./Image";
import styles from "./Add.style";

//image benim componentim tag değil!!!!!!!
export default function Add({ navigation, data, setData }) {
  const [title, setTitle] = useState("");
  const [image, SetImage] = useState(null);
  const [price, SetPrice] = useState("");

  const newData = {
    image,
    title,
    price,
  };
  const addProduct = () => {
    //setData({ ...data, newData }); //bulmuyorrr!!!!
    navigation.navigate("ProductsPage");
    console.log(title);
    return { ...data, newData }; //setdata yerine yazdım ama ekleme yapmıyorr
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Add a Product!</Text>
      <View style={styles.image}>
        <Image style={styles.image}></Image>
        <EvilIcons name="image" size={85} color="black" />
      </View>
      <View style={styles.title}>
        <TextInput
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        ></TextInput>
        <MaterialIcons name="title" size={20} color="#000" />
      </View>
      <View style={styles.price}>
        <TextInput
          placeholder="Price"
          onChange={(e) => SetPrice(e.target.value)}
        />
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
      <View>
        <Button
          onPress={addProduct}
          title="Add Product"
          style={styles.button}
        />
      </View>
    </View>
  );
}
