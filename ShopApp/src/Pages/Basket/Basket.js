import { Text, View, Image } from "react-native";
import React, { Component, useEffect, useState } from "react";
import { Storage } from "../../utils/Storage";
import { useIsFocused } from "@react-navigation/native";

import { RenderProduct } from "../Products/Products";
import Button from "../../Components/Button/Button";
import Loading from "../../Components/Loading/Loading";
import styles from "./Basket.style";

export default Basket = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [basket, setBasket] = useState([]);
  const [basketPrice, setBasketPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const getBasket = async () => {
    const basket = await Storage.GetItem("basket");
    const basketPrice = await Storage.GetItem("basketPrice");
    setBasket(basket);
  };
  const goToProdutcs = () => {
    setLoading(true);
    navigation.navigate("ProductsStack", { screen: "ProductsPage" });
    loading ? <Loading /> : setLoading(false);
  };
  const removeAllBasket = () => {
    Storage.RemoveItem("basket");
    setBasket([]);
  };

  useEffect(() => {
    // bu sayfa her görüntülendiğinde fonksiyonu tekrar calıstırır
    isFocused && getBasket();
  }, [isFocused]);
  return (
    <View>
      {(basket && basket.length == 0) || !basket ? (
        <View style={styles.innerContainer}>
          <Text style={styles.text}>You don't have any products.</Text>
          <Text style={styles.text}>
            Please click the bottom button to see the products.{" "}
          </Text>
          <Image
            source={require("../../assets/images.png")}
            style={styles.image}
          />
        </View>
      ) : (
        basket.map((item) => {
          return <RenderProduct item={item} key={item.toString()} />;
        })
      )}

      <View>
        {basket ? (
          <View style={styles.container}>
            <Button text={"Delete all"} onPress={() => removeAllBasket()} />
          </View>
        ) : (
          <View style={{ justifyContent: "flex-end", marginTop: 40 }}>
            <Button text="Go to Products!" onPress={goToProdutcs} />
          </View>
        )}
      </View>
    </View>
  );
};
