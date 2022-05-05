import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import Products from "./Pages/Products/Products";
import Login from "./Pages/Login/Login";
import Loading from "./Components/Loading/Loading";
import Profile from "./Pages/Profile/Profile";
import Add from "./Pages/Add/Add";
import Detail from "./Pages/Detail/Detail";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Router() {
  const userSession = useSelector((s) => s.user);
  const isLoading = useSelector((s) => s.isAuthLoading);

  const TopBar = () => {
    return (
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
          name="ProductsPage"
          component={Products}
          options={{
            title: "Home",
            tabBarActiveTintColor: "#00695C",
            headerStyle: { backgroundColor: "#00695C" },
            headerTitleStyle: { color: "white" },
            tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Add"
          component={Add}
          options={{
            tabBarActiveTintColor: "#00695C",
            headerShown: null,
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="plus-circle"
                color={"black"}
                size={24}
              /> // görünmüyo
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: null,
            tabBarActiveTintColor: "#00695C",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="account" size={24} color="black" />
            ),
          }}
        />
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
            name="Detail"
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
