import React, { useEffect } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../components/Card";
import BoldText from "../../components/Text/BoldText";
import { useSelector } from "react-redux";
import RegularText from "../../components/Text/RegularText";
import {
  useFirebaseConnect,
  isLoaded,
  isEmpty,
  useFirebase,
} from "react-redux-firebase";

import firebase from "firebase";
const UserShopScreen = ({ navigation }) => {
  const userId = firebase.auth().currentUser.uid;
  const userProducts = "userProducts";
  const fdb = useFirebase();
  useFirebaseConnect([
    {
      path: "products",
      storeAs: userProducts,
      queryParams: [`equalTo=${userId}`, "orderByChild=userId"],
    },
  ]);
  const products = useSelector((state) => state.firebase.ordered.userProducts);
  const onProductLongPress = (id) => {
    Alert.alert("DELETE ITEM", "Are you sure you want to delete?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "DELETE",
        onPress: () => {
          fdb.remove(`products/${id}`);
        },
      },
    ]);
  };

  if (!isLoaded(products)) {
    return (
      <View style={styles.emptyContainer}>
        <RegularText>Loading...</RegularText>
      </View>
    );
  }
  if (isEmpty(products)) {
    return (
      <View style={styles.emptyContainer}>
        <RegularText>Product List Is Empty</RegularText>
      </View>
    );
  }
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
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <Card
                  item={item.value}
                  onProductPress={() =>
                    navigation.navigate("Product", { item: item.value })
                  }
                  onProductLongPress={() => onProductLongPress(item.key)}
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
