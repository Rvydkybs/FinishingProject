import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import products from "../../../products.json";
import ProductCard from "../../Components/ProductCard/ProductCard";
export default function TempPage({ navigation }) {
  const handleSelect = (id) => {
    navigation.navigate("Detail", { id });
  };
  const newRenders = ({ item }) => (
    <ProductCard product={item} onSelect={() => handleSelect(item.id)} />
  );
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        data={products}
        renderItem={newRenders}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
