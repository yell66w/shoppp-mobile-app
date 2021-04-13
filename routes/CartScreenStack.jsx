import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../assets/colors/colors";
import NavigationDrawerStructure from "../components/NavigationDrawerStructure";
import CartScreen from "../screens/CartScreen";
import RegularText from "../components/Text/RegularText";
import Ionicons from "react-native-vector-icons/Ionicons";
const Stack = createStackNavigator();

const CartScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Cart", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerRight: () => (
            <View style={styles.headerRight}>
              <Ionicons size={30} style={styles.headerRightIcon} name="cart" />
            </View>
          ),
          headerStyle: styles.headerStyle,
          headerTintColor: colors.blackPrimary, //Set Header text color
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </Stack.Navigator>
  );
};

export default CartScreenStack;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "Nunito-Bold",
  },
  headerStyle: {
    elevation: 0,
  },
  headerRight: {
    flexDirection: "row",
    marginRight: 15,
    alignItems: "center",
  },
  headerRightIcon: {
    color: colors.blackPrimary,
  },
});
