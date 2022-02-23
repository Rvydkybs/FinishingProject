import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,ScrollView,Image, Dimensions} from 'react-native';
//FlatList verileri çekip istediğimiz kadarını kullanıcıya göstermek için
import news_data from "./news_data.json";
import NewsCard from "./components/NewsCard/NewsCard";
import news_banner_data from "./news_banner_data.json";
import ListHeader from './components/NewsCard/ListHeader';

export default function App() {
  const newRenders=({item})=><NewsCard news={item}></NewsCard>;
   
  return (
    <>
      <View style={styles.container}>
      <Text style={styles.header}>NEWS</Text>
        <FlatList  //kullanıcının ekranda gördüğü verileri alır,görmedikleri açılana kadar hafızada bekler.her verinin bu yüzde
        //id'si olması gerek.hangisinin açılıp açılmadığını takip edebilmek için
        //her aldığımız json verisinin içinde id hazır olmayabilir bu yüzden biz manuel oluşturmalıyız
        keyExtractor={item=>item.u_id.toString()}//iki veya bir parametre alan arrow function
        ListHeaderComponent={()=>// sayfayı aşağı kaydırdığımızda scroll resimlerin de kayması için
        (<ListHeader/>)
        }
        data={news_data}//new data içinden aldığımız her bir obje bir itemdır.
        renderItem={newRenders}//bu iki component flatlist için zorunlu
        />
      </View>
    </>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#eceff1",
    marginTop:40
  },
  bannerImage:{
    height:Dimensions.get('window').height/4,//resimlerin dikeyde kaplayacağı yer
    width:Dimensions.get('window').width/2,//resimlerin yatayda kaplayacağı yer
  },
  header:{
    fontSize:30,
    textAlign:"center",
    fontWeight:"bold",
  }
})

