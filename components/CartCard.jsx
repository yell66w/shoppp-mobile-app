import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../assets/colors/colors";
import BoldText from "./Text/BoldText";
import RegularText from "./Text/RegularText";
import SemiBoldText from "./Text/SemiBoldText";

const CartCard = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <ImageBackground
          source={require("../assets/images/suit.jpg")}
          style={styles.image}
          borderRadius={10}
        ></ImageBackground>
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <View style={styles.topDetails}>
          <BoldText style={styles.title}>{item.title}</BoldText>
          <BoldText style={styles.ref}>{item.ref}</BoldText>
          <View style={styles.typeSquare}>
            <BoldText style={styles.typeText}>
              {item.size || item.gender}
            </BoldText>
          </View>
        </View>
        <View style={styles.bottomDetails}>
          <SemiBoldText style={styles.priceText}>${item.price}</SemiBoldText>
          <View style={styles.quantityContainer}>
            <View style={styles.quantityCircle}>
              <RegularText>-</RegularText>
            </View>
            <BoldText style={styles.quantityText}>{item.qty}</BoldText>
            <View style={styles.quantityCircle}>
              <RegularText>+</RegularText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 5,
    flexDirection: "row",
    marginBottom: 35,
  },
  image: {
    backgroundColor: colors.graySecondary,
    height: 200,
    width: 150,
    resizeMode: "cover",
  },
  detailsContainer: {
    marginTop: 5,
    justifyContent: "space-around",
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
  },
  ref: {
    color: "gray",
  },
  priceText: {
    fontSize: 16,
    color: colors.yellowPrimary,
  },
  typeSquare: {
    marginTop: 5,
    width: 60,
    height: 30,
    backgroundColor: colors.blackPrimary,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
  },
  typeText: {
    color: "white",
    fontSize: 16,
  },
  bottomDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityCircle: {
    width: 25,
    height: 25,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
  },
});
