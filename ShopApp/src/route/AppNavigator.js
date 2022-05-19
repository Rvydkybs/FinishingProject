import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import Profile from "../Pages/Profile/Profile";
import Add from "../Pages/Add/Add";

import Products from "../Pages/Products/Products";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDispatch } from "react-redux";
import ProductsStack from "./ProductsStack";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();

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
        name="ProductsStack"
        component={ProductsStack}
        options={() => ({
          title: "Home",
          tabBarActiveTintColor: "#00695C",
          headerStyle: { backgroundColor: "#00695C" },
          headerTitleStyle: { color: "white" },
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        })}
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
              color={"white"}
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
export default AppNavigator;
