import { StyleSheet, Text, View,Button } from 'react-native';
import { useEffect, useState } from 'react';
export default function App() {
  const[counter,setCounter]=useState(10);
  function updateCounter() {
    setCounter(counter+1);
  }
  useEffect(
    ()=>{
    },[counter]
  )
  return (
    <View >

      <Text style={{fontSize:20 ,margin:30}}>COUNTER: {counter}</Text>
      <Button title='Change Counter' onPress={updateCounter}></Button>
    </View>
  );
}

