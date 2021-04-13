import React from "react";
import { Image, StyleSheet, Text, Touchable, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import colors from "../assets/colors/colors";
import CartCard from "../components/CartCard";
import BoldText from "../components/Text/BoldText";
import RegularText from "../components/Text/RegularText";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

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
const CheckoutScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <TouchableOpacity>
              <View style={styles.userDetailsContainer}>
                <View style={styles.nameContainer}>
                  <BoldText style={styles.text18}>Rebecca Hall</BoldText>
                  <Entypo size={18} name="chevron-right" />
                </View>
                <RegularText style={styles.address}>
                  22 to Barker St. Maryle Dan
                </RegularText>
                <RegularText style={styles.address}>London</RegularText>
                <RegularText style={styles.address}>United Kingdom</RegularText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.paymentCardContainer}>
                <Image
                  style={styles.paymentLogo}
                  source={require("../assets/images/mastercard.png")}
                />
                <BoldText style={styles.text18}>
                  Master Card ending ****12
                </BoldText>
                <Entypo size={18} name="chevron-right" />
              </View>
            </TouchableOpacity>
          </>
        }
        data={CART_DATA}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponent={
          <View style={styles.bottomDetails}>
            <View style={styles.questionCodeContainer}>
              <Ionicons
                style={{ marginRight: 5 }}
                name="add-circle"
                size={24}
              />
              <BoldText style={styles.text16}>Add Promo Code</BoldText>
            </View>
            <View style={styles.deliveryContainer}>
              <View style={styles.deliveryTextContainer}>
                <BoldText style={styles.text16}>Total $200</BoldText>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Checkout")}
              >
                <BoldText style={styles.buttonText}>Place Order</BoldText>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  userDetailsContainer: {
    borderColor: colors.graySecondary,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  paymentCardContainer: {
    borderColor: colors.graySecondary,
    borderBottomWidth: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  paymentLogo: {
    width: 65,
    height: 40,
  },

  questionCodeContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.graySecondary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text16: {
    fontSize: 16,
  },
  address: {
    fontSize: 16,
    color: "gray",
  },
  text18: {
    fontSize: 18,
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
    fontSize: 18,
    color: "white",
  },
  text16: {
    fontSize: 16,
  },
});
