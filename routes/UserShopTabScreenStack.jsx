import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import colors from "../assets/colors/colors";
import HomeScreenStack from "./HomeScreenStack";
import CategoriesScreenStack from "./CategoriesScreenStacks";
import CartScreenStack from "./CartScreenStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreenStack from "./ProfileScreenStack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
const Tab = createBottomTabNavigator();
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import UserShopScreenStack from "./user/UserShopScreenStack";
import UserOrdersScreenStack from "./user/UserOrdersScreenStack";
import AddItemScreen from "../screens/user/AddItemScreen";
import AddItemScreenStack from "./user/AddItemScreenStack";
export const UserShopTabScreenStack = () => {
  const quantity = useSelector((state) => state.cartItems.quantity);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Shop") {
            return <FontAwesome5 name="store" size={size} color={color} />;
          } else if (route.name === "Orders") {
            iconName = "cart";
          } else if (route.name === "AddItem") {
            iconName = "add-circle";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.yellowPrimary,
        inactiveTintColor: "gray",
        style: styles.tabBar,
      }}
    >
      <Tab.Screen name="Shop" component={UserShopScreenStack} />
      <Tab.Screen
        name="AddItem"
        options={{ title: "Add Item" }}
        component={AddItemScreenStack}
      />

      <Tab.Screen
        options={{ tabBarBadge: quantity }}
        name="Orders"
        component={UserOrdersScreenStack}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    elevation: 0,
    height: 60,
    backgroundColor: "black",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 10,
    borderTopWidth: 0,
  },
});
