import React from 'react';
import {View,Text,Image,TextInput} from "react-native";
import styles from "./style.js";

export default function Products({products}) {
  return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image sytle={styles.image} source={{uri:products.imgURL}}/>
          <Text style={styles.title}>{products.title} </Text>
          <Text style={styles.price}>{products.price}</Text>
          <Text>{products.inStock}</Text>
         </View>
      </View>
  )
}
