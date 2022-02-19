import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { SafeAreaView } from 'react-native-web';
import Myindex from './components';

const myStyle= StyleSheet.create({
  continer:{
    flex:1,//iki divin ne kadar yer kapyalacağını belirlemek için
  },
  upper_conteiner:{
    alignItems:'center',
    padding:2,
    backgroundColor:'green',
    margin:10,//içerden boşluk bırakır
    borderRadius:5,//kenar kıvrımı yumuşatma
    marginTop:25,
    flex:1,//yarı yarıya ekranı böl
  },
  bottom_container:{
    padding:2,
    backgroundColor:'blue',
    margin:10,//içerden boşluk bırakır
    borderRadius:5,//kenar kıvrımı yumuşatma
    flex:1,
  }
});
export default function App() {
//görselliğe hitap eden yapılar components
//görsel olmayan çalışan yapılar apiler
  return (
    <>
      <View style={myStyle.upper_conteiner}>
       <Text>HELLOW</Text>
       <Text>SMYDCK</Text>
        <Text>SMYDCK</Text>
        <Text>SMYDCK</Text>
        </View>
        <View style={myStyle.bottom_container}>
        <Button  title='Sumbit' onPress={()=>{console.log("is that work?")}}
        color="pink"
        ></Button>
        </View>
      <View style={myStyle.bottom_container}>
        <Button title='Sumbit two' onPress={()=>{}}></Button>

      </View>
      </>
  );
}

