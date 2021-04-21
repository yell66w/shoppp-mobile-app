import {
  CONTINUE_WITH_FACEBOOK,
  LOGOUT,
  REGISTER,
} from "../actions/auth.action";

const initialState = {
  userId: null,
  token: null,
  name: null,
  first_name: null,
  last_name: null,
  birthday: null,
  email: null,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return { ...state, ...payload };
    case CONTINUE_WITH_FACEBOOK:
      return { ...state, ...payload };
    case LOGOUT:
      const reset_state = {
        userId: null,
        token: null,
        name: null,
        first_name: null,
        last_name: null,
        birthday: null,
        email: null,
      };
      return reset_state;
    default:
      return state;
  }
};
