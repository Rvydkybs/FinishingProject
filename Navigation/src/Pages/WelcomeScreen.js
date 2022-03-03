import React from 'react';
import { View,Text ,StyleSheet} from 'react-native';
import Button from '../components/Button/Button';

export default function WelcomeScreen({navigation}) {//navigation benim default değerim değil!
 function gotoMemberSıgn() {
   navigation.navigate("memberSignScreen");
 }
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Kebap Fitness Salonu</Text>
        <Button text="create a member" onPress={gotoMemberSıgn}></Button>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",//butonu  görüntüde küçülten şey
  },
  header:{
      fontSize:30,
      fontWeight:"bold",
      textAlign:"center",
      margin:10,//sağdan soldan mesafe
  }
})