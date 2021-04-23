import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import BoldText from "../components/Text/BoldText";
import RegularText from "../components/Text/RegularText";
import CategoryCard from "../components/CategoryCard";
import Entypo from "react-native-vector-icons/Entypo";
import { useSelector } from "react-redux";
import { useFirebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";

const BEST_SELLING_DATA = [
  { key: "b1", title: "B1" },
  { key: "b2", title: "B2" },
  { key: "b3", title: "B3" },
  { key: "b4", title: "B4" },
  { key: "b5", title: "B5" },
  { key: "b6", title: "B6" },
];

const CATEGORIES = [
  { key: "c1", title: "Shoes" },
  { key: "c2", title: "T-shirt" },
  { key: "c3", title: "Suits" },
  { key: "c4", title: "Pants" },
  { key: "c5", title: "Accessories" },
];

const CategoriesScreen = ({ navigation }) => {
  // const products = useSelector((state) => state.products.availableProducts);
  useFirebaseConnect([{ path: "products" }]);
  const products = useSelector((state) => state.firebase.ordered.products);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.categoriesContainer}>
              <BoldText style={styles.title}>Categories</BoldText>
              <FlatList
                data={CATEGORIES}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <CategoryCard item={item} />}
              />
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
              data={products}
              numColumns={2}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <Card
                  item={item.value}
                  onProductPress={() =>
                    navigation.navigate("Product", { item: item.value })
                  }
                />
              )}
            />
          </>
        }
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 26,
  },
  categoriesContainer: {},
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
