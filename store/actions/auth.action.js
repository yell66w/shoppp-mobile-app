import * as Facebook from "expo-facebook";
import { FB } from "../../api/API";
export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const CONTINUE_WITH_FACEBOOK = "CONTINUE_WITH_FACEBOOK";
export const LOGOUT = "LOGOUT";
export const continueWithFacebook = () => {
  return async (dispatch) => {
    try {
      await Facebook.initializeAsync({
        appId: "287510019668480",
        appName: "Shopp",
      });
      //rebuild standalone if keyhash error
      const res = await Facebook.logInWithReadPermissionsAsync();
      if (res.type === "success") {
        const { token } = res;
        const { data } = await FB.get(
          `/me?fields=name,first_name,last_name,birthday,email&access_token=${token}`
        );
        data["userId"] = data["id"];
        delete data.id;
        console.log("dispatching", data);
        dispatch({ type: CONTINUE_WITH_FACEBOOK, payload: data });
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      await Facebook.initializeAsync({
        appId: "287510019668480",
        appName: "Shopp",
      });
      await Facebook.logOutAsync();
      dispatch({
        type: LOGOUT,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
