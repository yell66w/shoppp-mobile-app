import { API } from "../../api/API";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_USER_PRODUCTS = "SET_USER_PRODUCTS";
export const addProduct = (payload) => {
  return async (dispatch) => {
    try {
      const res = await API.post("products.json", payload);
      payload = { ...payload, ...{ id: res.data.name } };
      dispatch({ type: ADD_PRODUCT, payload });
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await API.get("products.json");

      if (res.data) {
        const dataArr = Object.entries(res.data);
        const loadedProducts = dataArr.map(([key, value]) => {
          return {
            id: key,
            ...value,
          };
        });
        dispatch({ type: SET_PRODUCTS, payload: loadedProducts });
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchUserProducts = (payload) => {
  return async (dispatch) => {
    try {
      //HERE FETCH USER PRODUCTS
    } catch (error) {}
  };
};
