import React from 'react';
import{View,Text,Button} from "react-native";


export default function Member({navigation}) {
  return (
      <View>
          <Text>Member</Text>
          <Button title='detail' onPress={()=>navigation.navigate("memberDetailscreen")}></Button>
      </View>
  )
}