import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Login from "../Login/Login";
import ProductsStack from "../../route/ProductsStack";
import CloseRegister from "./CloseRegister";

const Tab = createBottomTabNavigator();

export default function Register() {
  const navigation = useNavigation();
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          activeTintColor: "#F8F8F8", // active icon color
          inactiveTintColor: "#586589",
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 20,
          },
        }}
      >
        <Tab.Screen
          name="ProductsStack"
          component={ProductsStack}
          options={{
            title: "Home",
            tabBarActiveTintColor: "#00695C",
            headerStyle: { backgroundColor: "#00695C" },
            headerTitleStyle: { color: "white" },
            tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="CloseRegister"
          component={Login} //loginin açılması baika- logine yönlendirme başka
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
