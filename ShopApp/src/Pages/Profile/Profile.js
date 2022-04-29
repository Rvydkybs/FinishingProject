import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

export default function Profile({ user }) {
  const [data, setData] = useState({});
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
    <View>
      <View>
        <Text>{data.username}</Text>
      </View>
      <View>
        <Button
          color="#990066"
          style={style.button}
          title="Log Out"
          onPress={() =>
            dispatch({ type: "SET_USER", payload: { user: null } })
          }
        ></Button>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  button: {
    flexDirection: "row-reverse",
  },
});
