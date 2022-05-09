import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import useFetch from "../../hooks/useFetch/useFetch";
import styles from "./Detail.style";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import { Alert } from "react-native";

import Message from "../Message";

export default function Detail({ route }) {
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");

  const { id } = route.params;
  const { loading, error, data } = useFetch(
    "https://fakestoreapi.com/products/" + "/" + id
  );
  const handleSend = () => {
    <Message message={message} />;
    console.log("detail page-send message to seller part:", message);
    setMessage("");
    Alert.alert("Success", "Your message is send to the seller!");
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.descpn}>{data.description}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          value={message}
          placeholder="Send a message to the seller..."
          onChangeText={(str) => {
            setMessage(str);
          }}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.opcity} onPress={handleSend}>
          <Text style={styles.opcityText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
