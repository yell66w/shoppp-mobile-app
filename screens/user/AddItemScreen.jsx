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
const AddItemScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
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
    setSelectedImage({ localUri: pickerResult.uri });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              onPress={openImagePickerAsync}
              onLongPress={() => setSelectedImage(null)}
            >
              {selectedImage !== null ? (
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: selectedImage.localUri }}
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

            <TextInput style={styles.input} placeholder="Name Of Item" />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Price"
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Quantity"
            />
            <ButtonDefault title="ADD ITEM" />
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
