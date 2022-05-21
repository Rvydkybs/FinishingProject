import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useDispatch } from "react-redux";
import ActivityIndicator from "../../Components/Common/ActivityIndicator";

import styles from "./Profile.style";

export default function Profile({ navigation }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handleMessageCheck = () => {
    navigation.navigate("Message");
  };

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

  return loading ? (
    <ActivityIndicator />
  ) : (
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
      <View style={styles.bottomBoxes}>
        <View style={styles.basket}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Basket");
            }}
          >
            <Text>Go to Basket</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.message}>
          <TouchableOpacity onPress={handleMessageCheck}>
            <Text>Get your messages</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  button: {
    flexDirection: "row-reverse",
  },
});
