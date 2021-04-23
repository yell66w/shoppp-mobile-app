import React from "react";
import { useFonts } from "expo-font";
import Navigator from "./routes/Navigator";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { productsReducer } from "./store/reducers/product.reducer";
import { cartsReducer } from "./store/reducers/cart.reducer";
import thunk from "redux-thunk";
import authReducer from "./store/reducers/auth.reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import RegularText from "./components/Text/RegularText";
import { View } from "react-native";
import { initializeFirebase } from "./database/firebaseDB.js";
import {
  firebaseReducer,
  ReactReduxFirebaseProvider,
} from "react-redux-firebase";

import firebase from "firebase";
initializeFirebase();

const rootReducer = combineReducers({
  products: productsReducer,
  cartItems: cartsReducer,
  auth: authReducer,
  firebase: firebaseReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};

const rrfConfig = {
  // productList: "products",
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
};
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
      <ReactReduxFirebaseProvider {...rrfProps}>
        <PersistGate
          loading={
            <View>
              <RegularText>Loading Persistor</RegularText>
            </View>
          }
          persistor={persistor}
        >
          <Navigator />
        </PersistGate>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
