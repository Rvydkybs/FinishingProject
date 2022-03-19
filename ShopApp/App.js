import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Products from "./src/Pages/Products/Products";
import Detail from "./src/Pages/Detail/Detail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: "Store",
            headerStyle: { backgroundColor: "#90caf9" },
            headerTitleStyle: { color: "white" },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: "Detail",
            headerStyle: { backgroundColor: "#90caf9" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
