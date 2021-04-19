import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet } from "react-native";
import colors from "../assets/colors/colors";
import { TabScreenStack } from "./TabScreenStack";
import { UserShopTabScreenStack } from "./UserShopTabScreenStack";
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
          component={TabScreenStack}
        />
        <Drawer.Screen
          name="MyShop"
          options={{
            drawerLabel: "My Shop",
          }}
          component={UserShopTabScreenStack}
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
