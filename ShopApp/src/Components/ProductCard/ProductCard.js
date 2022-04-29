import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import { TabView, SceneMap } from "react-native-pager-view";
import styles from "./ProductCard.style";

const Route = ({ title }) => {
  const [product, setPro] = useState();
  const getProductDetail = () => {
    fetch(`https://fakestoreapi.com/products/category/${title}`).then((res) => {
      setPro(res.json());
    });
  };
  getProductDetail();
  return (
    <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
      <Text>{title}</Text>
    </View>
  );
};
const renderScene = ({ route }) => {
  return <Route title={route.title} />;
};

export default function ProductCard({ product, onSelect }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState();

  const getProducts = () => {
    const temp = ["one", "two", "three", "four"];
    setRoutes(
      temp.map((item, index) => {
        return { key: index, title: item };
      })
    );
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <View>
      <TouchableWithoutFeedback onPress={onSelect}>
        {routes ? ( //hata veren yer
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
        ) : null}

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
