import { StyleSheet, Text, View ,FlatList,TextInput} from 'react-native';
import products from "./products.json";
import Products from './components/Products';
import sytles from "./components/style";

export default function App() {
  const newRenders=({item})=><Products products={item}></Products>;
  return (
    <View>
      <Text style={sytles.storeTitle} >PATİKA STORE</Text>
      <FlatList keyExtractor={item=>item.id.toString()}
      horizontal={false}
      ListHeaderComponent={()=>
       ( <TextInput style={sytles.search} placeholder=' SEARCH'></TextInput>)}
      data={products} renderItem={newRenders} numColumns={2}/>
    </View>
  );
}


