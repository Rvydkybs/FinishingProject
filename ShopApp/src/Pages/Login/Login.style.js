import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCCFF",
  },
  logo: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width,
    resizeMode: "contain",
    alignSelf: "center",
    tintColor: "white",
  },
  body: {
    margin: 5,
  },
});
