import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import colors from "../assets/colors/colors";
import NavigationDrawerStructure from "../components/NavigationDrawerStructure";

const Stack = createStackNavigator();

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
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

export default HomeScreenStack;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "Nunito-Bold",
  },
  headerStyle: {
    elevation: 0,
  },
});
