import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../../assets/colors/colors";
import NavigationDrawerStructure from "../../components/NavigationDrawerStructure";
import UserShopScreen from "../../screens/user/UserShopScreen";

const Stack = createStackNavigator();

const UserShopScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Shop">
      <Stack.Screen
        name="Shop"
        component={UserShopScreen}
        options={{
          title: "", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: styles.headerStyle,
          headerTintColor: colors.blackPrimary, //Set Header text color
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </Stack.Navigator>
  );
};

export default UserShopScreenStack;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "Nunito-Bold",
  },
  headerStyle: {
    elevation: 0,
  },
});
