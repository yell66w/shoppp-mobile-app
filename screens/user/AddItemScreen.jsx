import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import colors from "../../assets/colors/colors";
import ButtonDefault from "../../components/ButtonDefault";
import * as ImagePicker from "expo-image-picker";
import RegularText from "../../components/Text/RegularText";
import BoldText from "../../components/Text/BoldText";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/actions/product.action";
const AddItemScreen = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: null,
    price: null,
    quantity: null,
    colors: ["#EA9F5A", "#6CC178", "#C95EBF", "#5048C8", "#AFC4D6", "#000000"],
    sizes: ["S", "XS", "L"],
    description: null,
    imageURL: null,
  });
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setProduct({ ...product, ...{ imageURL: pickerResult.uri } });
  };
  const onAddItem = () => {
    dispatch(addProduct(product));
    setProduct({
      name: null,
      price: null,
      quantity: null,
      colors: [
        "#EA9F5A",
        "#6CC178",
        "#C95EBF",
        "#5048C8",
        "#AFC4D6",
        "#000000",
      ],
      sizes: ["S", "XS", "L"],
      description: null,
      imageURL: null,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              onPress={openImagePickerAsync}
              onLongPress={() =>
                setProduct({ ...product, ...{ imageURL: null } })
              }
            >
              {product.imageURL !== null ? (
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: product.imageURL }}
                    style={styles.thumbnail}
                  />
                </View>
              ) : (
                <View style={styles.noImageContainer}>
                  <RegularText
                    style={{ fontSize: 16, color: colors.grayPrimary }}
                  >
                    Upload an Image
                  </RegularText>
                </View>
              )}
            </TouchableOpacity>
            <View style={styles.hr}>
              <BoldText style={{ fontSize: 18 }}>Item Details</BoldText>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Name Of Item"
              value={product.name}
              onChangeText={(text) =>
                setProduct({ ...product, ...{ name: text } })
              }
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Price"
              value={product.price}
              onChangeText={(text) =>
                setProduct({ ...product, ...{ price: text } })
              }
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Quantity"
              value={product.quantity}
              onChangeText={(text) =>
                setProduct({ ...product, ...{ quantity: text } })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={product.description}
              multiline={true}
              onChangeText={(text) =>
                setProduct({ ...product, ...{ description: text } })
              }
            />
            <ButtonDefault title="ADD ITEM" onPress={onAddItem} />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default AddItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputContainer: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  input: {
    borderBottomColor: colors.graySecondary,
    borderBottomWidth: 2,
    paddingVertical: 10,
    marginBottom: 30,
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    borderRadius: 20,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  noImageContainer: {
    width: 300,
    height: 150,
    borderColor: colors.grayPrimary,
    borderWidth: 2,
    borderRadius: 30,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  hr: {
    borderColor: colors.graySecondary,
    marginVertical: 20,
  },
});
