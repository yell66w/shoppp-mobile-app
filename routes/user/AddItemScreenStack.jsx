import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../../assets/colors/colors";
import NavigationDrawerStructure from "../../components/NavigationDrawerStructure";
import AddItemScreen from "../../screens/user/AddItemScreen";

const Stack = createStackNavigator();

const AddItemScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="AddItem">
      <Stack.Screen
        name="AddItem"
        component={AddItemScreen}
        options={{
          title: "Add Item", //Set Header Title
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

export default AddItemScreenStack;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "Nunito-Bold",
  },
  headerStyle: {
    elevation: 0,
  },
});
