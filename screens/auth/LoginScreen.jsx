import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Chec } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import BoldText from "../../components/Text/BoldText";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import ButtonDefault from "../../components/ButtonDefault";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../assets/colors/colors";
import CheckBox from "@react-native-community/checkbox";
import SemiBoldText from "../../components/Text/SemiBoldText";
const LoginScreen = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#30353F", "#27292F", "#181A1C"]}
        style={styles.header}
      >
        <TouchableOpacity
          style={styles.touchableHeader}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome5 color="white" name="chevron-left" />
          <BoldText style={{ color: "white", marginLeft: 5 }}>BACK</BoldText>
        </TouchableOpacity>

        <BoldText
          style={{ color: "white", fontSize: 32, paddingHorizontal: 15 }}
        >
          Log into{"\n"}your account
        </BoldText>
      </LinearGradient>
      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Email" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Password" />
        </View>
        <View style={styles.rememberMe}>
          <CheckBox
            disabled={false}
            tintColors={{
              true: colors.blackPrimary,
              false: colors.blackPrimary,
            }}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <SemiBoldText>Remember me</SemiBoldText>
        </View>
        <ButtonDefault
          title="SIGN IN"
          style={{ backgroundColor: colors.blackPrimary }}
          textStyle={{ color: "white" }}
        />
        <ButtonDefault
          title="SIGN IN WITH FACEBOOK"
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
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: {
    width: "100%",
    height: 230,
    paddingHorizontal: 30,
    paddingVertical: 40,
    justifyContent: "space-between",
  },
  touchableHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomContainer: {
    marginTop: 50,
    paddingHorizontal: 50,
  },
  inputContainer: {
    borderBottomColor: colors.graySecondary,
    borderBottomWidth: 2,
    paddingVertical: 15,
    marginBottom: 15,
  },
  rememberMe: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 15,
  },
  buttonFacebook: {
    backgroundColor: "#3966BE",
    marginTop: 15,
  },
});
