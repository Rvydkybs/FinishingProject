import { StyleSheet } from "react-native";
export default StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
  },
  registerWithGoogleButton: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "gray",
    padding: 10,
    height: 50,
    width: 300,
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 10,
    flexDirection: "row",
  },
  horizonText: {
    margin: 5,
  },
  inputText: {
    borderWidth: 1,
    width: 300,
    height: 50,
    borderRadius: 50,
    borderColor: "gray",
  },
  CreateAccountButton: {
    borderRadius: 50,
    padding: 10,
    height: 50,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00695C",
    marginBottom: 30,
    fontSize: 15,
    marginTop: 30,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  innerText: {
    color: "white",
    fontSize: 15,
  },
});
