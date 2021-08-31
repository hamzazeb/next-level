import { Platform, StatusBar, StyleSheet } from "react-native";
import Colors from "../config/Colors";

export default cardViewStyle = StyleSheet.create({
  SafeAreaStyle: {
    flex: 1,
    backgroundColor: Colors.baseColor,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  CenterContentStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
});
