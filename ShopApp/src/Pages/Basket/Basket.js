import { Text, View } from "react-native";
import React, { Component, useEffect, useState } from "react";
import { Storage } from "../../utils/Storage";
import { useIsFocused } from "@react-navigation/native";
import { RenderProduct } from "../Products/Products";
import Button from "../../Components/Button/Button";

export default Basket = () => {
  const isFocused = useIsFocused();
  const [basket, setBasket] = useState([]);

  const getBasket = async () => {
    const basket = await Storage.GetItem("basket");
    setBasket(basket);
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
        <Text>henüz eklemedin</Text>
      ) : (
        basket.map((item) => {
          return <RenderProduct item={item} />;
        })
      )}
      <Button text={"Delete all"} onPress={() => removeAllBasket()} />
    </View>
  );
};
