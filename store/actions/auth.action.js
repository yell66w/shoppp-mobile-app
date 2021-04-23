import * as Facebook from "expo-facebook";
import firebase from "firebase";
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
      const res = await Facebook.logInWithReadPermissionsAsync();
      if (res.type === "success") {
        const { token } = res;
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        const {
          user,
          additionalUserInfo,
        } = await firebase.auth().signInWithCredential(credential);
        const data = {
          userId: user.uid,
          name: user.displayName,
          first_name: additionalUserInfo.profile.first_name,
          last_name: additionalUserInfo.profile.last_name,
          birthday: user.birthday || null,
          email: user.email,
        };
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

      await firebase.auth().signOut();
      await Facebook.logOutAsync();
      dispatch({
        type: LOGOUT,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
