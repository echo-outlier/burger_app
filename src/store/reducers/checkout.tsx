const initialState = {
  first: { value: "", error: null },
  last: { value: "", error: null },
  email: { value: "", error: null },
  mobileno: { value: "", error: null },
  delivery_type: "Prime",
  validate: false,
};

const reducer = (state = initialState, action: any) => {
  const prevstate = { ...state };

  switch (action.type) {
    case "FIRST":
      prevstate.first.value = action.value;
      prevstate.first.error = action.error;
      prevstate.validate = true;
      break;
    case "LAST":
      prevstate.last.value = action.value;
      prevstate.last.error = action.error;
      prevstate.validate = true;
      break;
    case "EMAIL":
      prevstate.email.value = action.value;
      prevstate.email.error = action.error;
      prevstate.validate = true;
      break;
    case "NUMBER":
      prevstate.mobileno.value = action.value;
      prevstate.mobileno.error = action.error;
      prevstate.validate = true;
      break;
    case "ISFORMVALID":
      if (
        (((prevstate.first.error === prevstate.last.error) ===
          prevstate.email.error) ===
          prevstate.mobileno.error) ===
        null
      )
        prevstate.validate = false;
      else {
        prevstate.validate = true;
      }
      break;
    case "SUBMITORDER":
      prevstate.first.value = "";
      prevstate.last.value = "";
      prevstate.email.value = "";
      prevstate.mobileno.value = "";
      break;
    case "DELIVERY":
      prevstate.delivery_type = action.value;
  }
  return prevstate;
};

export default reducer;
