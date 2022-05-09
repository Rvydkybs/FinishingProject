import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import Login from "./Pages/Login/Login";
import Loading from "./Components/Loading/Loading";
import Profile from "./Pages/Profile/Profile";
import Add from "./Pages/Add/Add";
import Detail from "./Pages/Detail/Detail";
import TempPage from "./Pages/TempPage/TempPage";
import Message from "./Pages/Message";
import Register from "./Components/Register/Register";
import Loginscreen from "./Pages/Login/LoginScreen";
import SignUpScreen from "./Pages/Login/SignUp";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Router() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userSession = useSelector((s) => s.user);
  const isLoading = useSelector((s) => s.isAuthLoading);
  const dispatch = useDispatch();

  const firebaseConfig = {
    //firebase
    apiKey: "AIzaSyDC2D7nYV_aP1JmWK5oRl-XBKExTMjeqQY",
    authDomain: "shopapppatika.firebaseapp.com",
    projectId: "shopapppatika",
    storageBucket: "shopapppatika.appspot.com",
    messagingSenderId: "976991780324",
    appId: "1:976991780324:web:717669023737f43e655bf1",
  };
  firebase.initializeApp(firebaseConfig);

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  firebase.onAuthStateChanged(auth, (user) => {
    if (user != null) {
      console.log("We are authenticated now!");
    }

    // Do other things
  });
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
          name="TempPage"
          component={TempPage}
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
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerRight: () => (
              <MaterialCommunityIcons
                name="logout"
                size={24}
                color={"wihte"}
                onPress={() => {
                  dispatch({ type: "SET_USER", payload: { user: null } });
                }}
              />
            ),
            headerStyle: { backgroundColor: "#00695C" },
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
      ) : !isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Loginscreen}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Register"
            component={SignUpScreen}
            options={{
              headerShown: false,
            }}
          />
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
          <Stack.Screen
            name="Message"
            component={Message}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
