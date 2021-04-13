import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../assets/colors/colors";
import NavigationDrawerStructure from "../components/NavigationDrawerStructure";
import CategoriesScreen from "../screens/CategoriesScreen";

const Stack = createStackNavigator();

const CategoriesScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
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

export default CategoriesScreenStack;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "Nunito-Bold",
  },
  headerStyle: {
    elevation: 0,
  },
});
