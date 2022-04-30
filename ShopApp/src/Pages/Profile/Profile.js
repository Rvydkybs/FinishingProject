import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./Profile.style";
import LogOut from "../../Components/LogOut/LogOut";

export default function Profile({ navigation }) {
  const [data, setData] = useState({});
  const [lootie, setLootie] = useState(false);
  const dispatch = useDispatch();
  const fetchData = async () => {
    //fonskiyon içinde kullanmayınca haxios hata verdi?
    try {
      const { data: responseData } = await axios.get(
        "https://fakestoreapi.com/users/1"
      );
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("user: ", data);
  return (
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
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            dispatch({ type: "SET_USER", payload: { user: null } });
            setLootie(true);
            if (lootie) {
              <LogOut />; //çıkış yaparken lootie gelsin
              setLootie(false);
            }
          }}
        >
          <Text style={styles.tco}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  button: {
    flexDirection: "row-reverse",
  },
});
