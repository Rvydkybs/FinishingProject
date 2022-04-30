import AnimatedLottieView from "lottie-react-native";

export default function Loading() {
  return (
    <AnimatedLottieView
      source={require("../../assets/log-out.json")}
      autoPlay
    ></AnimatedLottieView>
  );
}
