import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Storage } from "../../utils/Storage";
import { useDispatch } from "react-redux";

import useFetch from "../../hooks/useFetch/useFetch";
import Error from "../../Components/Error/Error";
import styles from "./Detail.style";
import Loading from "../../Components/Loading/Loading";

export default function Detail({ route }) {
  const [message, setMessage] = useState("");

  const dispacth = useDispatch();
  const { id } = route.params;

  const { loading, error, data } = useFetch(
    "https://fakestoreapi.com/products/" + "/" + id
  );
  const handleSend = () => {
    if (message === "") {
      return Alert.alert("Wrong", "Please enter a message!");
    } else {
      Alert.alert("Success", "Your message is send to the seller!");
      // dispacth({ type: "SET_MESSAGE", payload: { message: message } });
      return setMessage("");
    }
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const handleBasket = async (item) => {
    const basket = await Storage.GetItem("basket");
    Storage.SetItem("basket", basket ? [...basket, item] : [item]);
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Image source={{ uri: data.image }} style={styles.image} />
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.descpn}>{data.description}</Text>
          <View style={styles.priceAndBasketContainer}>
            <TouchableOpacity
              style={styles.basketButton}
              onPress={() => handleBasket(data)}
            >
              <Text style={styles.price}>{data.price} TL</Text>
              <MaterialCommunityIcons name="basket" color={"black"} size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Send a message to the seller..."
            onChange={(str) => {
              setMessage(str.target.value);
            }}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.opcity} onPress={handleSend}>
            <Text style={styles.opcityText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
