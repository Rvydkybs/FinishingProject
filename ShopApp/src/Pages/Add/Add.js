import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ActivityIndicator,
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

  const [isLoading, setIsLoading] = useState(false);

  const handleAdd = () => {
    setIsLoading(true);
    const sendData = {
      title: title,
      price: price,
      description: desc,
      image: imagePicker,
      category: "electronic",
    };
    if (title == "" || desc == "" || price == "") {
      Alert.alert("Warning", "Please fill in the blanks!");
    } else {
      //var new_json = JSON.stringify(obj.Push(newList));
      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify(sendData),
      })
        .then(async (res) => {
          const data = await res.json();
          getAllProducts({ ...data, ...sendData });
        })
        .catch((err) => {
          setIsLoading(false);
          console.error(err);
        });
    }
  };

  const getAllProducts = (data) => {
    fetch("https://fakestoreapi.com/products", {
      method: "GET",
    }).then(async (response) => {
      const responseData = await response.json();
      navigation.navigate("ProductsPage", {
        isFromAddPage: true,
        data: [...responseData, data].sort((a, b) => b.id - a.id),
      });
      setIsLoading(false);
      resetValues();
    });
  };

  const resetValues = () => {
    setTitle("");
    SetDesc("");
    SetPrice("");
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
            onChangeText={setTitle}
          ></TextInput>
          <MaterialIcons name="title" size={20} color="#000" />
        </View>
        <View style={styles.price}>
          <TextInput
            placeholder="Price"
            onChangeText={SetPrice}
            value={price}
          />
          <Ionicons name="ios-pricetags" size={20} color="#000" />
        </View>
        {/* <View style={styles.category}>
          <TextInput placeholder="Category" />
          <MaterialIcons name="category" size={20} color="#000" />
        </View> */}
        <View style={styles.desc}>
          <TextInput
            placeholder="Description"
            onChangeText={SetDesc}
            value={desc}
          />
          <MaterialIcons name="description" size={20} color="#000" />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={handleAdd}>
            <Text style={{ color: "white", fontSize: 20 }}>Add product</Text>
            {isLoading && <ActivityIndicator color={"white"} />}
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
