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

export const TabScreenStack = () => {
  const quantity = useSelector((state) => state.cartItems.quantity);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = "home";
          } else if (route.name === "Categories") {
            iconName = "ios-list";
          } else if (route.name === "Cart") {
            iconName = "cart";
          } else if (route.name === "Profile") {
            iconName = "person";
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
      <Tab.Screen name="Feed" component={HomeScreenStack} />
      <Tab.Screen name="Categories" component={CategoriesScreenStack} />
      <Tab.Screen
        options={{ tabBarBadge: quantity }}
        name="Cart"
        component={CartScreenStack}
      />
      <Tab.Screen name="Profile" component={ProfileScreenStack} />
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
