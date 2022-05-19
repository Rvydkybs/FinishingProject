import { createStackNavigator } from "@react-navigation/stack";

import Detail from "../Pages/Detail/Detail";
import Message from "../Pages/Message/Message";
import Products from "../Pages/Products/Products";

const Stack = createStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsPage"
        component={Products}
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

export default ProductsStack;
