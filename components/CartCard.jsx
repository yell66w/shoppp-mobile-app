import React from "react";
import { Alert, ImageBackground, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import colors from "../assets/colors/colors";
import {
  addCartItemQuantity,
  deleteFromCart,
  subtractCartItemQuantity,
} from "../store/actions/cart.action";
import BoldText from "./Text/BoldText";
import SemiBoldText from "./Text/SemiBoldText";
import Ionicons from "react-native-vector-icons/Ionicons";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onLongPress={() =>
          Alert.alert("DELETE ITEM", "Are you sure you want to delete?", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "DELETE",
              onPress: () => {
                dispatch(deleteFromCart(item.id));
              },
            },
          ])
        }
      >
        <ImageBackground
          source={{ uri: item.imageURL }}
          style={styles.image}
          borderRadius={10}
        ></ImageBackground>
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <View style={styles.topDetails}>
          <BoldText style={styles.title}>{item.name}</BoldText>
          <BoldText style={styles.ref}>{item.ref}</BoldText>
          <View style={styles.typeSquare}>
            <BoldText style={styles.typeText}>{item.size}</BoldText>
          </View>
        </View>
        <View style={styles.bottomDetails}>
          <SemiBoldText style={styles.priceText}>${item.price}</SemiBoldText>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => dispatch(subtractCartItemQuantity(item.id))}
            >
              <Ionicons
                style={styles.quantityCircle}
                name="remove-circle-outline"
                size={30}
              />
            </TouchableOpacity>

            <BoldText style={styles.quantityText}>{item.quantity}</BoldText>
            <TouchableOpacity
              onPress={() => dispatch(addCartItemQuantity(item.id))}
            >
              <Ionicons
                style={styles.quantityCircle}
                name="add-circle-outline"
                size={30}
              />
            </TouchableOpacity>
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
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
  },
});
