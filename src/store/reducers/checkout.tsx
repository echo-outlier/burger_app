import * as Types from "../actions/actionTypes";
const empty = "This Field Cannot be leaved Empty";
const initialState = {
  first: { value: "", error: empty, touched: false, focus: false },
  last: { value: "", error: empty, touched: false, focus: false },
  state: { value: "", error: null, touched: false, focus: false },
  city: { value: "", error: empty, touched: false, focus: false },
  pincode: { value: "", error: empty, touched: false, focus: false },
  mobileno: { value: "", error: empty, touched: false, focus: false },
  delivery_type: "Prime",
  validate: false,
  loading: false,
  purchased: false,
};

const reducer = (state = initialState, action: any) => {
  let prevstate = { ...state };
  switch (action.type) {
    case Types.FIRST:
      if (action.focus) {
        prevstate.last.focus = false;
        prevstate.first.focus = true;
        prevstate.first.touched = true;
        prevstate.pincode.focus = false;
        prevstate.city.focus = false;
        prevstate.mobileno.focus = false;
      } else {
        prevstate.first.value = action.value;
        prevstate.first.error = action.error;
      }

      break;
    case Types.LAST:
      if (action.focus) {
        prevstate.last.focus = true;
        prevstate.last.touched = true;
        prevstate.first.focus = false;
        prevstate.pincode.focus = false;
        prevstate.city.focus = false;
        prevstate.mobileno.focus = false;
      } else {
        prevstate.last.value = action.value;
        prevstate.last.error = action.error;
      }

      break;
    case Types.STATE:
      prevstate.state.value = action.value;
      prevstate.state.error = action.error;
      break;
    case Types.CITY:
      if (action.focus) {
        prevstate.last.focus = false;
        prevstate.first.focus = false;
        prevstate.pincode.focus = false;
        prevstate.city.focus = true;
        prevstate.city.touched = true;
        prevstate.mobileno.focus = false;
      } else {
        prevstate.city.value = action.value;
        prevstate.city.error = action.error;
      }

      break;
    case Types.PINCODE:
      if (action.focus) {
        prevstate.last.focus = false;
        prevstate.first.focus = false;
        prevstate.pincode.touched = true;
        prevstate.pincode.focus = true;
        prevstate.city.focus = false;
        prevstate.mobileno.focus = false;
      } else {
        prevstate.pincode.value = action.value;
        prevstate.pincode.error = action.error;
      }

      break;
    case Types.NUMBER:
      if (action.focus) {
        prevstate.last.focus = false;
        prevstate.first.focus = false;
        prevstate.state.focus = false;
        prevstate.city.focus = false;
        prevstate.pincode.focus = false;
        prevstate.mobileno.focus = true;
        prevstate.mobileno.touched = true;
      } else {
        prevstate.mobileno.value = action.value;
        prevstate.mobileno.error = action.error;
      }

      break;
    case Types.ISFORMVALID:
      if (
        prevstate.first.error === null &&
        prevstate.last.error === null &&
        prevstate.state.error === null &&
        prevstate.mobileno.error === null &&
        prevstate.city.error === null &&
        prevstate.pincode.error === null
      ) {
        prevstate.validate = true;
      } else {
        prevstate.validate = false;
      }
      break;
    case Types.START_PURCHASE:
      prevstate.loading = true;
      break;
    case Types.ORDER_PURCHASED:
      prevstate = initialState;
      prevstate.purchased = true;
      break;
    case Types.ORDER_FAILED:
      prevstate.loading = false;
      break;
    case Types.DELIVERY:
      prevstate.delivery_type = action.value;
      break;
    case Types.CHANGE_ALL_FOCUS:
      prevstate.first.focus = false;
      prevstate.last.focus = false;
      prevstate.pincode.focus = false;
      prevstate.city.focus = false;
      prevstate.mobileno.focus = false;
      break;
    case Types.SET_PURCHASED_TO_FALSE:
      prevstate.purchased = false;
  }
  return prevstate;
};

export default reducer;
