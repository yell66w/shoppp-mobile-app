import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import colors from "../assets/colors/colors";
import BoldText from "../components/Text/BoldText";
import Octicons from "react-native-vector-icons/Octicons";
import Entypo from "react-native-vector-icons/Entypo";
import RegularText from "../components/Text/RegularText";
import { createStackNavigator } from "@react-navigation/stack";
import AboutScreen from "./AboutScreen";
import Card from "../components/Card";

const Stack = createStackNavigator();

const CATEGORIES = [
  { key: "c1", title: "New" },
  { key: "c2", title: "Women" },
  { key: "c3", title: "Trends" },
  { key: "c4", title: "Kids" },
  { key: "c5", title: "Men" },
];

const BEST_SELLING_DATA = [
  { key: "b1", title: "B1" },
  { key: "b2", title: "B2" },
  { key: "b3", title: "B3" },
  { key: "b4", title: "B4" },
  { key: "b5", title: "B5" },
  { key: "b6", title: "B6" },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.searchContainer}>
              <BoldText style={styles.searchHeading}>
                What item are you looking for?
              </BoldText>
              <View style={styles.searchBar}>
                <Octicons
                  size={20}
                  color="gray"
                  style={styles.searchIcon}
                  name="search"
                />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search your item"
                />
              </View>
            </View>
            <FlatList
              style={styles.categoriesContainer}
              data={CATEGORIES}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <RegularText style={styles.categoryText}>
                    {item.title}
                  </RegularText>
                </TouchableOpacity>
              )}
            />
            <View style={styles.featuredContainer}>
              <View style={styles.featuredImageContainer}>
                <Image
                  style={styles.featuredImage}
                  source={require("../assets/images/shoes.png")}
                />
              </View>
              <View style={styles.featuredTextContainer}>
                <BoldText style={styles.featuredTextHeading}>
                  The New Shoe Collection is Available Now.
                </BoldText>
                <RegularText style={styles.featuredTextLink}>
                  Explore more
                </RegularText>
              </View>
            </View>
            <View style={styles.filterHeadingContainer}>
              <BoldText style={styles.filterTitle}>Best selling</BoldText>
              <RegularText style={styles.filterLink}>
                See all
                <Entypo style={styles.filterLink} name="chevron-right" />
              </RegularText>
            </View>
            <FlatList
              style={styles.itemsContainer}
              data={BEST_SELLING_DATA}
              numColumns={2}
              renderItem={({ item }) => <Card />}
            />
          </>
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  searchContainer: {
    marginTop: 5,
    paddingHorizontal: 15,
  },
  searchHeading: {
    fontSize: 30,
    lineHeight: 35,
  },
  searchBar: {
    marginTop: 20,
    backgroundColor: colors.graySecondary,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    marginRight: 20,
    opacity: 0.6,
  },
  searchInput: {
    fontFamily: "Nunito",
    fontSize: 16,
  },
  categoriesContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  categoryText: {
    color: colors.blackPrimary,
    opacity: 0.6,
    marginRight: 30,
    fontSize: 18,
  },
  featuredContainer: {
    marginTop: 30,
    height: 200,
    borderRadius: 15,
    backgroundColor: "#E7ECF0",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
  },
  featuredImageContainer: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  featuredImage: {
    width: 150,
    height: 150,
  },

  featuredTextContainer: {
    flex: 5,
  },
  featuredTextHeading: {
    fontSize: 18,
    marginBottom: 40,
  },
  featuredTextLink: {
    fontSize: 12,
    textDecorationLine: "underline",
  },
  filterHeadingContainer: {
    marginTop: 35,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  filterTitle: {
    fontSize: 30,
  },
  filterLink: {
    fontSize: 18,
    opacity: 0.5,
  },
  itemsContainer: {
    paddingHorizontal: 10,
  },
});
