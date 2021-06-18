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

export const First = (value) => {
  const error = Validate(Types.FIRST, value);
  return {
    type: Types.FIRST,
    value: value,
    error: error,
  };
};

export const Last = (value) => {
  const error = Validate(Types.LAST, value);
  return {
    type: Types.LAST,
    value: value,
    error: error,
  };
};

export const Email = (value) => {
  const error = Validate(Types.EMAIL, value);
  return {
    type: Types.EMAIL,
    value: value,
    error: error,
  };
};

export const Number = (value) => {
  const error = Validate(Types.NUMBER, value);
  return {
    type: Types.NUMBER,
    value: value,
    error: error,
  };
};

export const Delivery = (value) => {
  return {
    type: Types.DELIVERY,
    value: value,
  };
};

const SaveOrder = () => {
  return { type: Types.SUBMITORDER };
};

const Validate = (type, value) => {
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
    case Types.EMAIL:
      const pattern = /[a-z0-9]+\@+[a-zA-Z]+\.+[a-z]/;
      if (!pattern.test(value)) {
        return "Please Enter a Valid Email Address";
      }
      break;
    // case Types.NUMBER:
    //   const regex = /^[0123456789]{1,10}$/;
    //   if (!regex.test(value)) {
    //     return "Not a Valid Phone Number";
    //   }
    //   break;
  }
  return null;
};

export const SubmitOrder = () => {
  return (dispatch, getState) => {
    if (getState().checkout.validate) {
      const order = {
        ingredients: getState().burger.foodlist,
        price: getState().burger.price,
        customer: {
          name: `${getState().checkout.first.value} ${
            getState().checkout.last.value
          }`,
          email: `${getState().checkout.email.value}`,
          mobileno: `${getState().checkout.mobileno.value}`,
          delivery_mode: `${getState().checkout.delivery_type}`,
        },
      };
      axios
        .post("/BurgerOrders.json", order)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      dispatch(SaveOrder());
    }
  };
};

export const CleanBurger = () => {
  return { type: Types.CLEANBURGER };
};
