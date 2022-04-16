import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

export default function Profile({ user }) {
  //const userInformation = useSelector((s) => s.user);
  console.log(user);
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        style={style.button}
        title="Log Out"
        onPress={() => dispatch({ type: "SET_USER", payload: { user: null } })}
      ></Button>
      {user && <Text>{user.username}</Text>}
    </View>
  );
}

const style = StyleSheet.create({
  button: {
    flexDirection: "row-reverse",
  },
});
