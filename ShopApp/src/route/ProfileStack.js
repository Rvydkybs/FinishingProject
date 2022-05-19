import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import Basket from "../Pages/Basket/Basket";

import Profile from "../Pages/Profile/Profile";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Basket"
        component={Basket}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileStack;
