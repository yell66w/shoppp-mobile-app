import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../assets/colors/colors";

const BoldText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
export default BoldText;
const styles = StyleSheet.create({
  text: {
    fontFamily: "Nunito-Bold",
    color: colors.blackPrimary,
  },
});
