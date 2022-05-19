import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./Add.style";
import products from "../../../products.json";
export default function Add({ navigation }) {
  const [title, setTitle] = useState("");
  const [price, SetPrice] = useState("");
  const [desc, SetDesc] = useState("");
  const [imagePicker, setImagePicker] = useState(null);

  const handleAdd = () => {
    // var obj = JSON.parse(json);
    // const newList = {
    //   title,
    //   price,
    //   desc,
    // };
    if (title || desc || price === "") {
      Alert.alert("Warning", "Please fill in the blanks!");
    } else {
      //var new_json = JSON.stringify(obj.Push(newList));
      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          price: price,
          description: desc,
          image: imagePicker,
          category: "electronic",
        }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));

      navigation.navigate("TempPage");
    }
  };
  const handleChoose = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImagePicker(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Text style={{ fontSize: 25 }}>Add a Product!</Text>
        <View style={styles.image}>
          <TouchableOpacity onPress={handleChoose}>
            {!imagePicker ? (
              <EvilIcons name="image" size={100} color="black" />
            ) : (
              <Image
                source={{ uri: imagePicker }}
                style={{ width: 140, height: 140, resizeMode: "contain" }}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.title}>
          <TextInput
            placeholder="Title"
            value={title}
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
          <TextInput
            placeholder="Description"
            onChange={(e) => SetDesc(e.target.value)}
          />
          <MaterialIcons name="description" size={20} color="#000" />
        </View>
        <View>
          <Button
            color="#00695C"
            onPress={handleAdd}
            title="Add Product"
            style={styles.button}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
