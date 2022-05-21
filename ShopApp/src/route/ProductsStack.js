import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import React from "react";
import Detail from "../Pages/Detail/Detail";
import Message from "../Pages/Message/Message";
import Products from "../Pages/Products/Products";

const Stack = createStackNavigator();

const ProductsStack = () => {
  const userSession = useSelector((s) => s.user);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsPage"
        component={Products}
        options={{
          headerRight: () => (
            <MaterialCommunityIcons
              name="logout"
              size={24}
              color={"white"}
              onPress={() => {
                dispatch({ type: "SET_USER", payload: { user: null } });
              }}
            />
          ),
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>

      <Stack.Screen
        name="Message"
        component={Message}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductsStack;
