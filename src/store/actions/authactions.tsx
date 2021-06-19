import axios from "axios";
import * as Types from "./actionTypes";

export const authStart = () => {
  return {
    type: Types.AUTH_START,
  };
};

export const authSuccess = (token, userid) => {
  return {
    type: Types.AUTH_SUCCESS,
    token: token,
    userId: userid,
  };
};

export const authFail = (error) => {
  return {
    type: Types.AUTH_FAIL,
    error: error,
  };
};

export const Logout = () => {
  return {
    type: Types.AUTH_LOGOUT,
  };
};

const checkAuthTimeout = (expireTime) => {
  return (dispatch) => {
    console.log(expireTime);
    setTimeout(dispatch(Logout), expireTime);
  };
};

export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    console.log(email, password);
    const authdata = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`;
    if (isSignUp) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`;
    }
    axios
      .post(url, authdata)
      .then((response) => {
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("userId", response.data.localId);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        console.log(response.data);
        dispatch(checkAuthTimeout(response.data.expiresIn * 1000));
      })
      .catch((error) => {
        dispatch(authFail(error.response.data.error.message));
      });
  };
};

export const isAuthencated = () => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(authStart());
    if (!token) {
      dispatch(Logout());
    } else {
      const userId = localStorage.getItem("userId");
      const authData = {
        idToken: token,
      };
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_API_KEY}`,
          authData
        )
        .then((response) => {
          console.log(response.data.users[0].localId);
          dispatch(authSuccess(token, userId));
        })
        .catch((error) => {
          dispatch(Logout());
          console.log(error.response);
        });
    }
  };
};
