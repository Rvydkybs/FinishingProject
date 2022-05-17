import { View, FlatList, Button, Text } from "react-native";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";
import { useDispatch } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./Products.style";
import { color } from "react-native-reanimated";

const Stack = createStackNavigator();

export default function Products({ navigation }) {
  const dispatch = useDispatch();

  const { loading, data, error } = useFetch(
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
  const handlePress = () => {};
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
                onPress={handlePress}
                title="men's clothing"
                color="#00695C"
              />
              <Button onPress={handlePress} title="jewelery" color="#00695C" />
              <Button
                onPress={handlePress}
                title="electronics"
                color="#00695C"
              />
              <Button
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
      {/* <FlatList data={data} renderItem={renderProduct}></FlatList> */}
    </View>
  );
}
