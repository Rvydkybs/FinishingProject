import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginPage"
        component={Login}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
