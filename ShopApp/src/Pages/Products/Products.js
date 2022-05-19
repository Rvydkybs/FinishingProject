import { View, FlatList, Button, Text } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import styles from "./Products.style";
import ActivityIndicator from "../../Components/Common/ActivityIndicator";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
//import useCategory from "../../hooks/usecategory/useCategory";

const Stack = createStackNavigator();

export const RenderProduct = ({ item }) => {
  const navigation = useNavigation();
  const handleProductSelect = (id) => {
    navigation.navigate("Detail", { id });
  };
  return (
    <ProductCard
      product={item}
      onSelect={() => handleProductSelect(item.id)}
    ></ProductCard>
  );
};
export default function Products({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const route = useRoute();

  const getData = async (url) => {
    setIsLoading(true);
    setError(false);
    await axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
        console.log("hata", err);
      });
  };
  useEffect(() => {
    getData("https://fakestoreapi.com/products");
  }, []);

  useEffect(() => {
    if (route.params?.isFromAddPage) {
      setData(route.params.data);
    }
  }, [route.params]);

  return (
    <View>
      <View style={styles.scrollView}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ height: 45 }}
          showsHorizontalScrollIndicator={false}
          //style={styles.scroll}
        >
          <Button
            id="men"
            onPress={() => getData("https://fakestoreapi.com/products")}
            title="All products"
            color="#00695C"
          />
          <Button
            id="men"
            onPress={() =>
              getData(
                "https://fakestoreapi.com/products/category/men's clothing"
              )
            }
            title="men's clothing"
            color="#00695C"
          />
          <Button
            id="jewelery"
            onPress={() =>
              getData("https://fakestoreapi.com/products/category/jewelery")
            }
            title="jewelery"
            color="#00695C"
          />
          <Button
            id="electronics"
            onPress={() =>
              getData("https://fakestoreapi.com/products/category/electronics")
            }
            title="electronics"
            color="#00695C"
          />
          <Button
            id="women"
            onPress={() =>
              getData(
                "https://fakestoreapi.com/products/category/women's clothing"
              )
            }
            title="women's clothing"
            color="#00695C"
          />
        </ScrollView>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : error ? (
        <Error />
      ) : (
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => <RenderProduct item={item} />}
            style={styles.list}
          ></FlatList>
        </View>
      )}
    </View>
  );
}
