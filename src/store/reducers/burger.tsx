import * as Types from "../actions/actionTypes";

const initialState = {
  foodlist: {
    Salad: 0,
    Cheese: 0,
    Bacon: 0,
    Meat: 0,
  },
  Pricelist: {
    Bacon: 0.7,
    Cheese: 1.2,
    Meat: 1.5,
    Salad: 0.5,
  },
  modalstate: false,
  TotalPrice: 0,
  isBurgeEmpty: true,
};

const isBurgerEmpty = (prevstate) => {
  let flag = false;
  const arr = Object.keys(prevstate.foodlist);
  for (var key in arr) {
    if (prevstate.foodlist[arr[key]] !== 0) {
      flag = true;
    }
  }
  if (flag) {
    prevstate.isBurgerEmpty = false;
  } else {
    prevstate.isBurgerEmpty = true;
  }
};

const reducer = (state = initialState, action: any) => {
  const prevstate = { ...state };
  if (action.type === Types.ADD) {
    prevstate.foodlist[`${action.food}`] =
      prevstate.foodlist[`${action.food}`] + 1;
    prevstate.TotalPrice = state.Pricelist[`${action.food}`] + state.TotalPrice;
  } else if (
    action.type === Types.SUBTRACT &&
    prevstate.foodlist[`${action.food}`] !== 0
  ) {
    prevstate.foodlist[`${action.food}`] =
      prevstate.foodlist[`${action.food}`] - 1;
    prevstate.TotalPrice = state.TotalPrice - state.Pricelist[`${action.food}`];
  } else {
    if (action.type === Types.OPENMODAL) {
      prevstate.modalstate = !state.modalstate;
    }
    if (action.type === "CloseModal") {
      prevstate.modalstate = false;
    }
    if (action.type === Types.CLEANBURGER) {
      prevstate.foodlist = {
        Salad: 0,
        Cheese: 0,
        Bacon: 0,
        Meat: 0,
      };
      prevstate.TotalPrice = 0;
    }
    
  }

  isBurgerEmpty(prevstate);
  return prevstate;
};

export default reducer;
