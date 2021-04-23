import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import BoldText from "../../components/Text/BoldText";
import { TouchableOpacity } from "react-native-gesture-handler";
import ButtonDefault from "../../components/ButtonDefault";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import {
  continueWithFacebook,
  logout,
  register,
} from "../../store/actions/auth.action";
const AuthScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../assets/images/guy.jpg")}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.touchableHeader}
          onPress={() => navigation.push("Login")}
        >
          <BoldText style={{ color: "white", marginRight: 5 }}>
            SIGN IN
          </BoldText>
          <FontAwesome5 color="white" name="chevron-right" />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <BoldText style={{ color: "white", fontSize: 30 }}>
          Ideal store for your shopping{" "}
          {firebase.auth().currentUser
            ? "Still logged in firebase"
            : "logged out"}
        </BoldText>
        <View style={styles.hr}></View>
        <ButtonDefault
          onPress={() => navigation.push("Register")}
          title="SIGN UP WITH EMAIL"
          style={{ backgroundColor: "white" }}
          textStyle={{ color: "black" }}
        />
        <ButtonDefault
          onPress={() => dispatch(continueWithFacebook())}
          title="CONTINUE WITH FACEBOOK"
          logo={
            <Ionicons
              color="white"
              size={20}
              style={{ marginRight: 10 }}
              name="logo-facebook"
            />
          }
          style={styles.buttonFacebook}
          textStyle={{ color: "white" }}
        />
      </View>
    </ImageBackground>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 15,
  },
  touchableHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomContainer: {
    paddingHorizontal: 30,
  },
  hr: {
    borderColor: "white",
    borderTopWidth: 1,
    opacity: 0.3,
    marginVertical: 20,
  },
  buttonFacebook: {
    backgroundColor: "transparent",
    marginTop: 15,
    borderColor: "white",
    borderWidth: 1,
  },
});
