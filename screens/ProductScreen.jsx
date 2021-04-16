import React, { useCallback, useState } from "react";
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
  Touchable,
  View,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import colors from "../assets/colors/colors";
import ButtonDefault from "../components/ButtonDefault";
import BoldText from "../components/Text/BoldText";
import RegularText from "../components/Text/RegularText";
import { addToCart } from "../store/actions/cart.action";

const ProductScreen = ({ route }) => {
  const { item } = route.params;
  const [size, setSize] = useState(item.sizes[0]);
  const [color, setColor] = useState(item.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const onAddToCart = useCallback(() => {
    dispatch(
      addToCart(
        Math.random().toString(),
        item.name,
        item.price,
        item.imageURL,
        size,
        color,
        quantity,
        item.ref
      )
    );
    ToastAndroid.show("Added to cart", ToastAndroid.SHORT);
  }, [dispatch, size, color, quantity]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <ImageBackground
            source={{ uri: item.imageURL }}
            style={styles.image}
          ></ImageBackground>
          <View style={styles.bottomDetails}>
            <BoldText style={{ fontSize: 20 }}>${item.price}</BoldText>
            <BoldText style={styles.title}>{item.name}</BoldText>
            <View style={styles.optionsWrapper}>
              {item.colors.map((color, index) => {
                return (
                  <TouchableOpacity key={index}>
                    <View
                      style={{
                        ...styles.colorOption,
                        ...{ backgroundColor: color },
                      }}
                    ></View>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View>
              <BoldText style={styles.sizesTitle}>Sizes</BoldText>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.sizesWrapper}>
                  {item.sizes.map((itemSize, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => setSize(itemSize)}
                      >
                        <View
                          style={[
                            styles.sizeOption,
                            size === itemSize ? styles.selectedSizeOption : {},
                          ]}
                        >
                          <BoldText
                            style={[
                              styles.sizeText,
                              size === itemSize ? styles.selectedSizeText : {},
                            ]}
                          >
                            {itemSize}
                          </BoldText>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </View>

            <View style={styles.detailsWrapper}>
              <BoldText style={styles.detailsOverview}>Overview</BoldText>
              <RegularText style={{ color: "gray" }}>
                {item.description}
              </RegularText>
            </View>
            <ButtonDefault title="ADD TO CART" onPress={onAddToCart} />
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
  selectedSizeOption: {
    backgroundColor: colors.blackPrimary,
    borderWidth: 0,
  },
  selectedSizeText: {
    color: "white",
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
