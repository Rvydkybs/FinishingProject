import React from "react";
import { View, Text, Image } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import styles from "./Detail.style";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";

export default function Detail({ route }) {
  const { id } = route.params;
  const { loading, error, data } = useFetch(
    "https://fakestoreapi.com/products/" + "/" + id
  );

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
    </View>
  );
}
