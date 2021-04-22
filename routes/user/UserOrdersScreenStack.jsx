import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../../assets/colors/colors";
import NavigationDrawerStructure from "../../components/NavigationDrawerStructure";
import UserOrdersScreen from "../../screens/user/UserOrdersScreen";

const Stack = createStackNavigator();

const UserOrdersScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Orders">
      <Stack.Screen
        name="Orders"
        component={UserOrdersScreen}
        options={{
          title: "Orders", //Set Header Title
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

export default UserOrdersScreenStack;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "Nunito-Bold",
  },
  headerStyle: {
    elevation: 0,
  },
});
