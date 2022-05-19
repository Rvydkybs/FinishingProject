import { View, ActivityIndicator } from "react-native";

export default ActivityIndicatorLoading = () => {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator color={"blue"} />
    </View>
  );
};
