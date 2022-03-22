import { View, FlatList } from "react-native";
import Config from "react-native-config";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";

export default function Products({ navigation }) {
  const { loading, data, error } = useFetch(
    //artık verileri custom hook ile çağırıyoruz
    "https://fakestoreapi.com/products/"
  );
  const handleProductSelect = (id) => {
    navigation.navigate("DetailPage", { id });
  };

  const renderProduct = ({ item }) => (
    <ProductCard
      product={item}
      onSelect={() => handleProductSelect(item.id)}
    ></ProductCard>
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View>
      <FlatList data={data} renderItem={renderProduct}></FlatList>
    </View>
  );
}
