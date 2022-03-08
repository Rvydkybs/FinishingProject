import React from 'react';
import{View,Text,Button} from "react-native";


export default function MemberDetail({navigation}) {
  return (
      <View>
          <Text>MemberDetail</Text>
          <Button title='detail' onPress={()=>navigation.navigate("memberUpdatescreen")}></Button>
      </View>
  )
}