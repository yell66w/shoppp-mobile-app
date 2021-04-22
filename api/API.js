// Set config defaults when creating the instance
const axios = require("axios");
export const API = axios.create({
  baseURL: "https://shop-app-fe6b8-default-rtdb.firebaseio.com/",
});

export const FB = axios.create({
  baseURL: "https://graph.facebook.com/",
});
