import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../assets/colors/colors";
import BoldText from "./Text/BoldText";

const ButtonDefault = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <BoldText style={styles.buttonText}>{title}</BoldText>
    </TouchableOpacity>
  );
};

export default ButtonDefault;

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    backgroundColor: colors.yellowPrimary,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
});
