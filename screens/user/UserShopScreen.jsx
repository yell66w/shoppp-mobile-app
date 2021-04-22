import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../components/Card";
import BoldText from "../../components/Text/BoldText";
import { useSelector } from "react-redux";
import RegularText from "../../components/Text/RegularText";

const UserShopScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.userProducts);

  if (products.length < 1)
    return (
      <View style={styles.emptyContainer}>
        <RegularText>Store is currently empty.</RegularText>
      </View>
    );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.categoriesContainer}>
              <BoldText style={styles.title}>Shop Items</BoldText>
            </View>
            <FlatList
              style={styles.itemsContainer}
              data={products}
              numColumns={2}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Card
                  item={item}
                  onProductPress={() =>
                    navigation.navigate("Product", { item })
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

export default UserShopScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
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
