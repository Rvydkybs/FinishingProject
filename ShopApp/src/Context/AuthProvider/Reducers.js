import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Reducers(state, action) {
  switch (action.type) {
    case "SET_USER":
      const { user } = action.payload;
      user
        ? AsyncStorage.setItem("@USER", JSON.stringify(user)) //VERİ KADETMEK
        : AsyncStorage.removeItem("@USER");
      return { ...state, user };

    default:
      return { state };
  }
}
