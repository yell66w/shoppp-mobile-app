import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
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
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";
import { addProduct } from "../../store/actions/product.action";
require("firebase/firebase-storage");
require("firebase/database");

const AddItemScreen = () => {
  const userId = useSelector((state) => state.auth.userId);
  const [addingProduct, setAddingProduct] = useState(false);
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

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setProduct({ ...product, ...{ imageURL: pickerResult.uri } });
  };

  async function uploadImageAsync(imageUrl) {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    var metadata = {
      contentType: "image/jpeg",
    };
    const imageName = `IMG_${Date.now()}${userId}.jpg`;
    const ref = firebase.storage().ref("images").child(imageName);
    const task = ref.put(blob, metadata);
    const taskProgress = (snapshot) => {
      console.log(`transferred: ${snapshot.bytesTransferred}`);
    };

    const taskCompleted = () => {
      task.snapshot.ref.getDownloadURL().then((snapshot) => {
        savePostData(snapshot);
        console.log(snapshot);
      });
    };
    const taskError = (snapshot) => {
      console.log(snapshot);
    };
    task.on("state_changed", taskProgress, taskError, taskCompleted);

    return ref.getDownloadURL();
  }

  const onAddItem = async () => {
    setAddingProduct(true);
    //EDIT - Free Firebase cloud storage upload operations = 20kb/day only
    // const imageURL = await uploadImageAsync(product.imageURL);
    const imageURL = product.imageURL;
    const newProd = {
      ...product,
      imageURL,
      userId,
    };
    dispatch(addProduct(newProd));
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
    setAddingProduct(false);
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
          {addingProduct ? (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color={colors.yellowPrimary} />
            </View>
          ) : null}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default AddItemScreen;

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF99",
  },
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
