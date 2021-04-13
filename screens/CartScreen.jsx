import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import colors from "../assets/colors/colors";
import CartCard from "../components/CartCard";
import BoldText from "../components/Text/BoldText";
import RegularText from "../components/Text/RegularText";
import SemiBoldText from "../components/Text/SemiBoldText";

const CART_DATA = [
  {
    key: "b1",
    title: "Adidas Sneakers",
    ref: "D43867389",
    price: 150,
    size: 41,
    qty: 3,
  },
  {
    key: "b2",
    title: "T-shirt",
    ref: "D41823389",
    price: 200,
    gender: "M",
    qty: 3,
  },
  {
    key: "b3",
    title: "Adidas Sneakers",
    ref: "D43867389",
    price: 150,
    size: 41,
    qty: 3,
  },
];
const CartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CART_DATA}
        renderItem={({ item }) => <CartCard item={item} />}
      />
      <View style={styles.bottomDetails}>
        <View style={styles.questionCodeContainer}>
          <BoldText style={styles.text16}>
            Do you have a promotion code?
          </BoldText>
        </View>
        <View style={styles.deliveryContainer}>
          <View style={styles.deliveryTextContainer}>
            <BoldText style={styles.text16}>Delivery</BoldText>
            <RegularText>Standard - Free</RegularText>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Checkout")}
          >
            <BoldText style={styles.buttonText}>BUY NOW</BoldText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 15,
  },
  questionCodeContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.graySecondary,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  text16: {
    fontSize: 16,
  },
  deliveryTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  deliveryContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
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
