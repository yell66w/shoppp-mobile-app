import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../assets/colors/colors";
import ButtonDefault from "../components/ButtonDefault";
import BoldText from "../components/Text/BoldText";
import RegularText from "../components/Text/RegularText";

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <ImageBackground
            source={require("../assets/images/suit.jpg")}
            style={styles.image}
          ></ImageBackground>
          <View style={styles.bottomDetails}>
            <BoldText style={{ fontSize: 20 }}>$150</BoldText>
            <BoldText style={styles.title}>Original White T-Shirt</BoldText>
            <View style={styles.optionsWrapper}>
              <View style={styles.colorOption}></View>
              <View style={styles.colorOption}></View>
              <View style={styles.colorOption}></View>
              <View style={styles.colorOption}></View>
              <View style={styles.colorOption}></View>
            </View>
            <View>
              <BoldText style={styles.sizesTitle}>Sizes</BoldText>
              <View style={styles.sizesWrapper}>
                <View style={styles.sizeOption}>
                  <BoldText style={styles.sizeText}>S</BoldText>
                </View>
                <View style={styles.sizeOption}>
                  <BoldText style={styles.sizeText}>S</BoldText>
                </View>
                <View style={styles.sizeOption}>
                  <BoldText style={styles.sizeText}>S</BoldText>
                </View>
                <View style={styles.sizeOption}>
                  <BoldText style={styles.sizeText}>S</BoldText>
                </View>
              </View>
            </View>

            <View style={styles.detailsWrapper}>
              <BoldText style={styles.detailsOverview}>Overview</BoldText>
              <RegularText style={{ color: "gray" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                facere hic, amet quisquam adipisci ipsam deleniti, earum, modi
                dolor esse inventore provident alias impedit expedita quasi
                necessitatibus explicabo harum sed.
              </RegularText>
            </View>
            <ButtonDefault title="ADD TO CART" />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 450,
    maxHeight: 450,
  },
  bottomDetails: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  title: {
    fontSize: 30,
  },
  optionsWrapper: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  colorOption: {
    backgroundColor: colors.yellowPrimary,
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 30,
  },
  sizesTitle: {
    marginBottom: 5,
  },
  sizesWrapper: {
    flexDirection: "row",
    paddingBottom: 20,
  },
  sizeOption: {
    width: 90,
    height: 40,
    borderRadius: 5,
    backgroundColor: "white",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.blackPrimary,
    borderWidth: 3,
  },
  sizeText: {
    color: colors.blackPrimary,
    fontSize: 18,
    fontWeight: "900",
  },
  detailsWrapper: {
    paddingBottom: 20,
  },
  detailsOverview: {
    marginBottom: 5,
  },
});
