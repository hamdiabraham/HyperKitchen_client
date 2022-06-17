import { USER_LOGIN, USER_LOGOUT } from "./authConstants";

export function login(user, token) {
  return {
    type: USER_LOGIN,
    user,
    token,
  };
}

export function logout() {
  return {
    type: USER_LOGOUT,
  };
}
