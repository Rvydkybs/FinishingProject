import { createStackNavigator } from "@react-navigation/stack";
import Basket from "../Pages/Basket/Basket";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Profile from "../Pages/Profile/Profile";
import Message from "../Pages/Message/Message";

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
      />
      <Stack.Screen
        name="Basket"
        component={Basket}
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
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileStack;
