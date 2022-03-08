import React from 'react';
import{View,Text} from "react-native";
import { Button } from 'react-native';


export default function Profile({navigation}) {
  return (
      <View>
          <Text>Profile</Text>
          <Button title="Edit" onPress={()=>navigation.navigate("ProfileEdit")}></Button>
      </View>
  )
}