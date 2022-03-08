import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";//gerekli
import { createNativeStackNavigator}  from "@react-navigation/native-stack";
import MemberSign from './src/Pages/memberSign';
import WelcomeScreen from "./src/Pages/WelcomeScreen"
import MemberResult from './src/Pages/MemberResult';

const Stack= createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="memberSignScreen" component={MemberSign}></Stack.Screen>
      <Stack.Screen name="memberResultScreen" component={MemberResult}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  )
}
