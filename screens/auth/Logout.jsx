import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import RegularText from "../../components/Text/RegularText";
import { logout } from "../../store/actions/auth.action";

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
  }, []);

  return (
    <View style={styles.container}>
      <RegularText>Logging you out..</RegularText>
    </View>
  );
};
export default Logout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
