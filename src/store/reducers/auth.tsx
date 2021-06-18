import * as Types from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  redirect: "/",
  redirectFrom: null,
};

const reducer = (state = initialState, action) => {
  const prevstate = { ...state };
  switch (action.type) {
    case Types.AUTH_START:
      prevstate.loading = true;
      break;
    case Types.AUTH_SUCCESS:
      prevstate.loading = false;
      prevstate.token = action.token;
      prevstate.userId = action.userId;
      prevstate.redirect = "/";
      break;
    case Types.AUTH_FAIL:
      prevstate.error = action.error;
      prevstate.loading = false;
      break;
    case Types.AUTH_LOGOUT:
      prevstate.token = null;
      prevstate.userId = null;
      prevstate.loading = false;
      prevstate.redirect = "/";
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      break;
    case Types.REDIRECT_FROM:
      prevstate.redirectFrom = action.location;
  }
  return prevstate;
};

export default reducer;
