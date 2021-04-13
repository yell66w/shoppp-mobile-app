import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet } from "react-native";
import colors from "../assets/colors/colors";
import HomeScreenStack from "./HomeScreenStack";
import AboutScreenStack from "./AboutScreenStack";
import CategoriesScreenStack from "./CategoriesScreenStacks";
import CartScreenStack from "./CartScreenStack";
const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: colors.yellowPrimary,
          labelStyle: styles.headerTitle,
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
          }}
          component={HomeScreenStack}
        />
        <Drawer.Screen
          name="Categories"
          options={{ drawerLabel: "Categories" }}
          component={CategoriesScreenStack}
        />
        <Drawer.Screen
          name="Cart"
          options={{ drawerLabel: "Cart" }}
          component={CartScreenStack}
        />
        <Drawer.Screen
          name="About"
          options={{ drawerLabel: "About" }}
          component={AboutScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "Nunito-Bold",
  },
});
