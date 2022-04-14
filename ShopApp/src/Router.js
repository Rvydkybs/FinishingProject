import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Products from "./Pages/Products/Products";
import Login from "./Pages/Login/Login";
import Loading from "./Components/Loading/Loading";
import Profile from "./Pages/Profile/Profile";
import Add from "./Pages/Add/Add";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Router() {
  const userSession = useSelector((s) => s.user);
  const isLoading = useSelector((s) => s.isAuthLoading);

  const p = () => {
    //böyle olmaz beybi!!!!!!!!!!!!!!!!!!!!!!!!!!
    userSession && <Profile user={userSession}></Profile>;
  };
  p();
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
      <Tab.Navigator
        screenOptions={{
          activeTintColor: "#F8F8F8", // active icon color
          inactiveTintColor: "#586589",
          tabBarIconStyle: { display: "none" },
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
            headerStyle: { backgroundColor: "#90caf9" },
            headerTitleStyle: { color: "white" },
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Add"
          component={Add}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="add-a-photo" size={24} color="black" /> //aq görünmüyo
            ),
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
