import * as Types from "./actionTypes";
import axios from "../../axios-orders";

export const Add = (food) => {
  return { type: Types.ADD, food: food };
};

export const Subtract = (food) => {
  return { type: Types.SUBTRACT, food: food };
};

export const OpenModal = () => {
  return { type: Types.OPENMODAL };
};

const Validate = (type, value) => {
  if (value.length === 0) {
    return "This field cannot be leaved empty";
  }
  switch (type) {
    case Types.FIRST:
      if (value.length < 1) {
        return "This field cannot be leaved empty";
      }
      break;
    case Types.LAST:
      if (value.length < 1) {
        return "This field cannot be leaved empty";
      }
      break;
    case Types.PINCODE:
      if (value.length !== 6) {
        return "Not a Valid Pincode";
      }
      break;
    case Types.NUMBER:
      if (value.length !== 10) {
        return "Not a Valid Mobile Number";
      }
      break;
    case Types.CITY:
      if (value.length < 1) {
        return "This field cannot be leaved empty";
      }
  }
  return null;
};

export const ChangeInputValue = (type, value) => {
  return (dispatch) => {
    const error = Validate(type, value);
    dispatch(ChangeInput(type, value, error));
    dispatch(IsFormValid());
  };
};

export const ChangeInput = (type, value, error) => {
  return {
    type: type,
    value: value,
    error: error,
  };
};

export const ChangeFocus = (type) => {
  return {
    type: type,
    focus: true,
  };
};

export const ChangeAllFocus = () => {
  return { type: Types.CHANGE_ALL_FOCUS };
};

export const IsFormValid = () => {
  return { type: Types.ISFORMVALID };
};

export const StartPurchase = () => {
  return { type: Types.START_PURCHASE };
};

const OrderPurchased = () => {
  return { type: Types.ORDER_PURCHASED };
};

const OrderFailed = () => {
  return { type: Types.ORDER_FAILED };
};

const SetPurchaseToFalse = () => {
  return { type: Types.SET_PURCHASED_TO_FALSE };
};

export const SubmitOrder = (input, foodlist, userId, price, delivery) => {
  return async (dispatch) => {
    const order = {
      foodlist: foodlist,
      price: price,
      userId: userId,
      customer: {
        name: `${input.first.value} ${input.first.value}`,
        state: `${input.state.value}`,
        city: `${input.city.value}`,
        pincode: `${input.pincode.value}`,
        mobileno: `${input.number.value}`,
        delivery_mode: `${delivery}`,
      },
    };
    dispatch(StartPurchase());
    axios
      .post("/BurgerOrders.json", order)
      .then((response) => {
        dispatch(OrderPurchased());
        dispatch(CleanBurger());
        dispatch(SetPurchaseToFalse());
      })
      .catch((error) => {
        dispatch(OrderFailed());
      });
  };
};

export const CleanBurger = () => {
  return { type: Types.CLEANBURGER };
};
