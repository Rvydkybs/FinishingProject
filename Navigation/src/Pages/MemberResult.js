import React from 'react';
import {View,Text,StyleSheet,Button} from "react-native";

export default function MemberResult({route,navigation}) {
    const {user}=route.params;
    function goBack() {
      navigation.navigate("WelcomeScreen");
    }
  return (
    <View style={styles.container}>
        <Text  style={styles.created}>User Created!</Text>
        <Text  style={styles.label}>Üye Adı: {user.userName}</Text>
        <Text  style={styles.label}>Üye Soyadı:{user.userSurname}</Text>
        <Text  style={styles.label}>Üye Emaili:{user.userEmail}</Text>
        <Text  style={styles.label}>Üye Yaşı:{user.userAge}</Text>
        <Button style={styles.button}  title='Go back' onPress={goBack}></Button>
   </View>
  )
}
const styles=StyleSheet.create({
    container:{
        marginTop:15,
        margin:5,
    },
    label:{
        fontSize:25,
       
    },
    created:{
        fontSize:30,
        fontWeight:"bold",
    },
    button:{
        padding:10,
        margin:10,
    }
})