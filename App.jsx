import React from "react";
import { useFonts } from "expo-font";
import Navigator from "./routes/Navigator";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { productsReducer } from "./store/reducers/product.reducer";
import { cartsReducer } from "./store/reducers/cart.reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cartItems: cartsReducer,
});
const store = createStore(rootReducer);

export default function App() {
  const [loaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
