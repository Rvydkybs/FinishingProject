import { createStackNavigator } from "@react-navigation/stack";

import Detail from "../Pages/Detail/Detail";
import Message from "../Pages/Message/Message";
import TopBar from "./TopBar";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
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
  );
};

export default AppNavigator;
