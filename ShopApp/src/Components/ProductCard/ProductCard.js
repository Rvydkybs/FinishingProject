import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import styles from "./ProductCard.style";

export default function ProductCard({ product, onSelect }) {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: product.image }} />
          <View style={styles.body_container}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price} TL</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
