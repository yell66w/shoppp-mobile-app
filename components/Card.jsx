import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../assets/colors/colors";

const Card = () => {
  return (
    <View style={styles.filterItemContainer}>
      <TouchableOpacity>
        <ImageBackground
          source={require("../assets/images/suit.jpg")}
          style={styles.filterItem}
          borderRadius={10}
        ></ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  filterItemContainer: {
    flex: 1,
    padding: 5,
  },
  filterItem: {
    backgroundColor: colors.graySecondary,
    height: 250,
    resizeMode: "cover",
  },
});
