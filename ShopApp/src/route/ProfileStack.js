import { createStackNavigator } from "@react-navigation/stack";
import Basket from "../Pages/Basket/Basket";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Profile from "../Pages/Profile/Profile";
import Message from "../Pages/Message/Message";
import ProfileDawerNavigation from "./ProfileDawerNavigation";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfilePage"
        component={ProfileDawerNavigation}
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
