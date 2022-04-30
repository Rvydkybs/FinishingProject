import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#E0F2F1",
  },
  title: { fontSize: 25, margin: 5, padding: 5 },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: 190,
    height: 150,
    borderColor: "#00695C",
    borderWidth: 3,
    resizeMode: "contain",
    alignItems: "center",
  },
  image: {
    width: 170,
    height: 140,
    marginLeft: 10,
    resizeMode: "contain",
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: "white",
    position: "absolute",
  },
});
