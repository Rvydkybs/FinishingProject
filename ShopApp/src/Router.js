import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Products from "./Pages/Products/Products";
import Detail from "./Pages/Detail/Detail";
import Login from "./Pages/Login/Login";
import { useSelector } from "react-redux";
import Loading from "./Components/Loading/Loading";

const Stack = createStackNavigator();

export default function Router() {
  const userSession = useSelector((s) => s.user);
  const isLoading = useSelector((s) => s.isAuthLoading);

  return (
    <NavigationContainer>
      {isLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      ) : (
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
      )}
    </NavigationContainer>
  );
}
