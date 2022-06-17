import { USER_LOGOUT, USER_LOGIN } from "./authConstants";

const initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : { user: null, token: null };

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { user: action.user, token: action.token };

    case USER_LOGOUT:
      return { user: null, token: null };

    default:
      return state;
  }
};
