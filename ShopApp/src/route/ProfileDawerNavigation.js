import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Pages/Profile/Profile";

export default function ProfileDawerNavigation() {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Message" component={Message} />
        <Drawer.Screen name="Basket" component={Basket} />
      </Drawer.Navigator>
    );
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DawerStack"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
