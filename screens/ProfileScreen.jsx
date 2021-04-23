import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
const ProfileScreen = ({ navigation }) => {
  const auth = useSelector((state) => state.auth);
  return (
    <View>
      <Text>Profile</Text>
      <Text>User Id: {auth.userId}</Text>
      <Text>Name: {auth.name}</Text>
      <Text>Birthday: {auth.birthday}</Text>
      <Text>Email: {auth.email}</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
