import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../assets/colors/colors";
import BoldText from "./Text/BoldText";
import SemiBoldText from "./Text/SemiBoldText";

const Card = ({ onProductPress, item, onProductLongPress }) => {
  return (
    <View style={styles.filterItemContainer}>
      <TouchableOpacity
        onPress={onProductPress}
        onLongPress={onProductLongPress}
      >
        <ImageBackground
          source={{ uri: item.imageURL }}
          style={styles.filterItem}
          borderRadius={10}
        ></ImageBackground>
      </TouchableOpacity>
      <View style={styles.detailWrapper}>
        <BoldText style={{ fontSize: 18 }}>{item.name}</BoldText>
        <BoldText style={{ color: colors.yellowPrimary }}>
          ${item.price}
        </BoldText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  filterItemContainer: {
    height: "100%",
    width: "50%",
    padding: 5,
    marginBottom: 15,
  },
  filterItem: {
    backgroundColor: colors.graySecondary,
    height: 250,
    resizeMode: "cover",
  },
  detailWrapper: {
    marginTop: 5,
  },
});
