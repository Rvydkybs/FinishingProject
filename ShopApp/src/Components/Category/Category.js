import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-pager-view";

const Route = ({ title }) => {
  const [product, setPro] = useState();
  const getProductDetail = () => {
    fetch(`https://fakestoreapi.com/products/category/${title}`).then((res) => {
      setPro(res.json());
    });
  };
  getProductDetail();
  return (
    <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
      <Text>{title}</Text>
    </View>
  );
};

// const SecondRoute = ({ title }) => (
//   <View style={{ flex: 1, backgroundColor: "#673ab7" }}>
//     <Text>{title}</Text>
//   </View>
// );

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });
const renderScene = ({ route }) => {
  return <Route title={route.title} />;
};
export default function Category() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState();

  const getProducts = () => {
    const temp = ["one", "two", "three", "four"];
    setRoutes(
      temp.map((item, index) => {
        return { key: index, title: item };
      })
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  return routes ? (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
