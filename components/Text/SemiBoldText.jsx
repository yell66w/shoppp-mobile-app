import React from "react";
import { StyleSheet, Text } from "react-native";

const SemiBoldText = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};
export default SemiBoldText;
const styles = StyleSheet.create({
  text: {
    fontFamily: "Nunito-SemiBold",
  },
});
