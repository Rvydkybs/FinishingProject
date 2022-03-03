import React, { useState } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

export default function MemberSign() {

  const[userName,setUserName]=useState("");
  const[userSurname,setUserSurName]=useState("");
  const[userAge,setUserAge]=useState("");
  const[userEmail,setUserEmail]=useState("");

  function handleSumbit() {
    const user={
      userName,
      userSurname,
      userAge,
      userEmail,
    }
    console.log(user);
    
  }
  return (
    <View style={styles.container}>
         <Input label="Member Name" onChangeText={null} placeholder="Enter a name" onChangeText={(text)=>setUserName(text)}></Input>
         <Input label="Member Surname" onChangeText={null} placeholder="Enter a surname" onChangeText={setUserSurName}></Input>
         <Input label="Member Age" onChangeText={null} placeholder="Member Age" onChangeText={setUserAge}></Input>
         <Input label="Member Email" onChangeText={null} placeholder="Enter an Email" onChangeText={setUserEmail}></Input>
         <Button text="save the document" onPress={handleSumbit}></Button>
    </View>
  )
}

 const styles=StyleSheet.create({
   container:{
     marginTop:30,
     margin:5
   },
 })
