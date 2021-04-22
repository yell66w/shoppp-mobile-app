import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../assets/colors/colors";
import { TabScreenStack } from "./TabScreenStack";
import { UserShopTabScreenStack } from "./UserShopTabScreenStack";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../screens/auth/AuthScreen";
import RegularText from "../components/Text/RegularText";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import { useSelector } from "react-redux";
import Logout from "../screens/auth/Logout";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Navigator = () => {
  const [isAppLoading, setisAppLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userId = useSelector((state) => state.auth.userId);
  useEffect(() => {
    setisAppLoading(true);
    if (userId) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setisAppLoading(false);
  }, [userId]);
  if (isAppLoading) {
    return (
      <View style={styles.loadingContainer}>
        <RegularText>Shopp</RegularText>
      </View>
    );
  } else
    return (
      <NavigationContainer>
        {isLoggedIn ? (
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
            <Drawer.Screen
              name="Logout"
              options={{
                drawerLabel: "Logout",
              }}
              component={Logout}
            />
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen
              name="Auth"
              options={{
                title: "",
                headerShown: false,
              }}
              component={AuthScreen}
            />
            <Stack.Screen
              options={{
                title: "",
                headerShown: false,
              }}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{
                title: "",
                headerShown: false,
              }}
              name="Register"
              component={RegisterScreen}
            />
          </Stack.Navigator>
        )}
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
  loadingContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
