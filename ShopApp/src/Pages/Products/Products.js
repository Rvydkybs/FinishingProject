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
import { useState } from "react";
//import useCategory from "../../hooks/usecategory/useCategory";

const Stack = createStackNavigator();

export default function Products({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const { loading, data, error, setData } = useFetch(
    //artık verileri custom hook ile çağırıyoruz
    "https://fakestoreapi.com/products/"
  );

  const handleProductSelect = (id) => {
    navigation.navigate("Detail", { id });
  };
  const renderProduct = ({ item }) => (
    <ProductCard
      product={item}
      onSelect={() => handleProductSelect(item.id)}
    ></ProductCard>
  );

  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Error />
      ) : (
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
                onPress={async () => {
                  const { data: responseData } = await axios.get(
                    "https://fakestoreapi.com/products/category/men's clothing"
                  );
                  setData(responseData);
                }}
                title="men's clothing"
                color="#00695C"
              />
              <Button
                id="jewelery"
                onPress={async () => {
                  const { data: responseData } = await axios.get(
                    "https://fakestoreapi.com/products/category/jewelery"
                  );

                  setData(responseData);
                }}
                title="jewelery"
                color="#00695C"
              />
              <Button
                id="electronics"
                onPress={async () => {
                  const { data: responseData } = await axios.get(
                    "https://fakestoreapi.com/products/category/electronics"
                  );
                  setData(responseData);
                }}
                title="electronics"
                color="#00695C"
              />
              <Button
                id="women"
                onPress={async () => {
                  const { data: responseData } = await axios.get(
                    "https://fakestoreapi.com/products/category/women's clothing"
                  );
                  setData(responseData);
                }}
                title="women's clothing"
                color="#00695C"
              />
            </ScrollView>
          </View>
          <FlatList
            data={data}
            renderItem={renderProduct}
            style={styles.list}
          ></FlatList>
        </View>
      )}
    </View>
  );
}
