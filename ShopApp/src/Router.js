import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Products from "./Pages/Products/Products";
import Detail from "./Pages/Detail/Detail";
import Login from "./Pages/Login/Login";
import { useSelector } from "react-redux";
import Loading from "./Components/Loading/Loading";
import Profile from "./Pages/Profile/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Router() {
  const userSession = useSelector((s) => s.user);
  const isLoading = useSelector((s) => s.isAuthLoading);

  const Detail = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: "Home",
            headerStyle: { backgroundColor: "#90caf9" },
            headerTitleStyle: { color: "white" },
          }}
        />
      </Stack.Navigator>
    );
  };
  const TopBar = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: "Home",
            headerStyle: { backgroundColor: "#90caf9" },
            headerTitleStyle: { color: "white" },
          }}
        ></Tab.Screen>
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer independent={true}>
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
            name="topBar"
            component={TopBar}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="detail"
            component={Detail}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
