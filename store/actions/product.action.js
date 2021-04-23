import firebase from "firebase";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_USER_PRODUCTS = "SET_USER_PRODUCTS";
export const addProduct = (payload) => {
  return async () => {
    try {
      const productListRef = firebase.database().ref("products");
      const newProduct = productListRef.push();
      (await newProduct).set(payload);
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const db = firebase.database().ref("products");
      db.on("value", (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const dataArr = Object.entries(data);
          const loadedProducts = dataArr.map(([key, value]) => {
            return {
              id: key,
              ...value,
            };
          });
          dispatch({ type: SET_PRODUCTS, payload: loadedProducts });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchUserProducts = () => {
  return async (dispatch) => {
    try {
      const userId = firebase.auth().currentUser.uid;
      const db = firebase.database().ref("products");
      db.orderByChild("userId")
        .equalTo(userId)
        .on("value", (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const dataArr = Object.entries(data);
            const loadedProducts = dataArr.map(([key, value]) => {
              if (value.userId === userId) {
                return {
                  id: key,
                  ...value,
                };
              }
            });
            dispatch({ type: SET_USER_PRODUCTS, payload: loadedProducts });
          }
        });
    } catch (error) {
      console.error(error);
    }
  };
};
