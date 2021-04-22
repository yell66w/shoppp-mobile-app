import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Chec,
  SafeAreaView,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import BoldText from "../../components/Text/BoldText";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import ButtonDefault from "../../components/ButtonDefault";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../assets/colors/colors";
import CheckBox from "@react-native-community/checkbox";
import SemiBoldText from "../../components/Text/SemiBoldText";
const RegisterScreen = ({ navigation }) => {
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
          Create your{"\n"}account
        </BoldText>
      </LinearGradient>
      <ScrollView>
        <View style={styles.bottomContainer}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Name" />
          </View>
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
            <SemiBoldText>
              You agree to the terms and privacy policy
            </SemiBoldText>
          </View>
          <ButtonDefault
            title="SIGN UP"
            style={{ backgroundColor: colors.blackPrimary }}
            textStyle={{ color: "white" }}
          />
          <View style={styles.orHR}>
            <BoldText style={{ color: "gray" }}>OR</BoldText>
          </View>
          <ButtonDefault
            title="SIGN UP WITH FACEBOOK"
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
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

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
    paddingHorizontal: 40,
    paddingBottom: 40,
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
  },
  orHR: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
});
