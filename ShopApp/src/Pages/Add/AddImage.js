import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styles from "./AddImage.style";

export default function AddImage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a picture to add</Text>

      <TouchableWithoutFeedback>
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/kamera.png")}
          ></Image>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/masa.png")}
          ></Image>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/saksı.png")}
          ></Image>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/çekiç.png")}
          ></Image>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/bisiklet.png")}
          ></Image>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
