import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../assets/colors/colors";
import NavigationDrawerStructure from "../components/NavigationDrawerStructure";
import CategoriesScreen from "../screens/CategoriesScreen";
import RegularText from "../components/Text/RegularText";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductScreen from "../screens/ProductScreen";

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
          headerRight: () => (
            <View style={styles.headerRight}>
              <RegularText style={styles.headerRightTitle}>Filter</RegularText>
              <Ionicons
                size={16}
                style={styles.headerRightIcon}
                name="filter"
              />
            </View>
          ),
          headerStyle: styles.headerStyle,
          headerTintColor: colors.blackPrimary, //Set Header text color
          headerTitleStyle: styles.headerTitle,
        }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          headerShown: false,
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
  headerRight: {
    flexDirection: "row",
    marginRight: 15,
    alignItems: "center",
  },
  headerRightTitle: {
    marginRight: 8,
    color: "gray",
    fontSize: 16,
  },
  headerRightIcon: {
    color: "gray",
  },
});
