import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../assets/colors/colors";

const RegularText = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};
export default RegularText;
const styles = StyleSheet.create({
  text: {
    fontFamily: "Nunito",
    color: colors.blackPrimary,
  },
});
