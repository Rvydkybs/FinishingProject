import AsyncStorage from "@react-native-async-storage/async-storage";

export const Storage = {
  GetItem: async (itemName) => {
    return await AsyncStorage.getItem(itemName).then((data) => {
      return JSON.parse(data);
    });
  },
  SetItem: async (itemName, value) => {
    return await AsyncStorage.setItem(itemName, JSON.stringify(value));
  },

  RemoveItem: async (itemName, value) => {
    return await AsyncStorage.removeItem(itemName);
  },
};
