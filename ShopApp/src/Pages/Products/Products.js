import { View, FlatList, Button, StyleSheet } from "react-native";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";
import { useDispatch } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

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

  return (
    <View>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <FlatList data={data} renderItem={renderProduct}></FlatList>
      )}
      {/* <FlatList data={data} renderItem={renderProduct}></FlatList> */}
    </View>
  );
}
