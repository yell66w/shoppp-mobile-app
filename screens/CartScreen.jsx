import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import colors from "../assets/colors/colors";
import ButtonDefault from "../components/ButtonDefault";
import CartCard from "../components/CartCard";
import BoldText from "../components/Text/BoldText";
import RegularText from "../components/Text/RegularText";

const CartScreen = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cartItems.products);
  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <FlatList
          ListFooterComponent={
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
                <ButtonDefault
                  title="BUY NOW"
                  onPress={() => navigation.navigate("Checkout")}
                />
              </View>
            </View>
          }
          data={cartItems}
          renderItem={({ item }) => <CartCard item={item} />}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <RegularText>No items in cart</RegularText>
        </View>
      )}
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
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
  },
});
