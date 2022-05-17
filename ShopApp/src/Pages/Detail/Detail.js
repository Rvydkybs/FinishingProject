import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import useFetch from "../../hooks/useFetch/useFetch";
import styles from "./Detail.style";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import { Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Message from "../Message/Message";

export default function Detail({ route }) {
  const [message, setMessage] = useState("");

  const { id } = route.params;
  const { loading, error, data } = useFetch(
    "https://fakestoreapi.com/products/" + "/" + id
  );
  const handleSend = () => {
    if (message === "") {
      return Alert.alert("Wrong", "Please enter a message!");
    } else {
      Alert.alert("Success", "Your message is send to the seller!");
      <Message data={message} />;
      return setMessage("");
    }
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <KeyboardAwareScrollView>
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
