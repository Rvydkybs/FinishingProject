import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useDispatch } from "react-redux";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import "react-native-gesture-handler";

import styles from "./Profile.style";
import LogOut from "../../Components/LogOut/LogOut";
// import { NavigationContainer } from "@react-navigation/native";
// import Location from "../../Pages/Location";

//const Drawer = createDrawerNavigator();

export default function Profile({ navigation }) {
  const [data, setData] = useState({});
  const [lootie, setLootie] = useState(false);
  const dispatch = useDispatch();
  const handleMessageCheck = () => {
    navigation.navigate("Message");
  };

  // const drawer = () => {
  //   return (
  //     <Drawer.Navigator>
  //       <Drawer.Screen name="Location" component={Location}></Drawer.Screen>
  //     </Drawer.Navigator>
  //   );
  // };
  const fetchData = async () => {
    try {
      const { data: responseData } = await axios.get(
        "https://fakestoreapi.com/users/1"
      );
      setData(responseData);
      setLoading(false);
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // <>
    //   <NavigationContainer>
    //     <Drawer.Navigator>
    //       <Drawer.Screen name="Location" component={Location}></Drawer.Screen>
    //     </Drawer.Navigator>
    //   </NavigationContainer>

    <View style={styles.outcontainer}>
      <View style={styles.container}>
        <Text style={{ fontSize: 24 }}>Your Profile</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.outline}>Name:</Text>
          <View style={styles.text}>
            <Text style={styles.line}> {data.username}</Text>
          </View>
          <Text style={styles.outline}>E-mail:</Text>
          <View style={styles.text}>
            <Text style={styles.line}> {data.email}</Text>
          </View>
          <Text style={styles.outline}>Phone Number:</Text>
          <View style={styles.text}>
            <Text style={styles.line}> {data.phone}</Text>
          </View>
        </View>
      </View>

      <View style={styles.message}>
        <TouchableOpacity onPress={handleMessageCheck}>
          <Text>Get your messages</Text>
        </TouchableOpacity>
      </View>
    </View>
    //</>
  );
}

const style = StyleSheet.create({
  button: {
    flexDirection: "row-reverse",
  },
});
