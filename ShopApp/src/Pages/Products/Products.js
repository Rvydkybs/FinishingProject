import { View, FlatList, Button, Text } from "react-native";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";
import { useDispatch } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./Products.style";
import axios from "axios";
import { useState } from "react";

const Stack = createStackNavigator();

export default function Products({ navigation }) {
  const [categoryData, setCategoryData] = useState([]);
  const dispatch = useDispatch();

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

  const handlePress = async (e) => {
    // const id = e.target.id;
    // console.log(id);
    // if (id == "men") {
    const { data: responseData } = await axios.get(
      "https://fakestoreapi.com/products/category/men's clothing"
    );
    console.log(responseData);
    setData(responseData);
    // data = responseData;
    //}
  };
  return (
    <View>
      {loading ? (
        <Loading />
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
                onPress={handlePress}
                title="men's clothing"
                color="#00695C"
              />
              <Button
                id="jewelery"
                onPress={handlePress}
                title="jewelery"
                color="#00695C"
              />
              <Button
                id="electronics"
                onPress={handlePress}
                title="electronics"
                color="#00695C"
              />
              <Button
                id="women"
                onPress={handlePress}
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
