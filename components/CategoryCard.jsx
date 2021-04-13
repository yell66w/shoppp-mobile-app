import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../assets/colors/colors";
import BoldText from "./Text/BoldText";
import RegularText from "./Text/RegularText";

const CategoryCard = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <ImageBackground
          source={require("../assets/images/suit.jpg")}
          style={styles.image}
          borderRadius={10}
        ></ImageBackground>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <BoldText style={styles.title}>{item.title}</BoldText>
        <BoldText style={styles.quote}>265 items</BoldText>
      </View>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 5,
  },
  image: {
    backgroundColor: colors.graySecondary,
    height: 200,
    width: 150,
    resizeMode: "cover",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 5,
  },
  title: {
    fontSize: 18,
  },
  quote: {
    color: colors.yellowPrimary,
  },
});
