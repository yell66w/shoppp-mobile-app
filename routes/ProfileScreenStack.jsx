import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import colors from "../assets/colors/colors";
import NavigationDrawerStructure from "../components/NavigationDrawerStructure";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const ProfileScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
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

export default ProfileScreenStack;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "Nunito-Bold",
  },
  headerStyle: {
    elevation: 0,
  },
});
