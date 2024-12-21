// src/actions/authActions.js
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

// Action to log in the user
export const login = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

// Action to log out the user
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
