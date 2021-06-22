import React from "react";
// @ts-ignore
import { connect } from "react-redux";
import {
  Hr,
  Div,
  Price,
  Div1,
  Flex,
  SubmitButton,
  SubmitButtonDisabled,
  PlusButton,
  MinusButton,
} from "./styles";
import { Add, Subtract, OpenModal } from "../../Store/actions/burgeractions";

const BurgerInfo = (props: any) => {
  const food_data = props.foodlist;

  const Handler = (food, func) => {
    if (func === "add") {
      props.Add(food);
    } else {
      props.Subtract(food);
    }
  };

  return (
    <Div height={window.innerHeight}>
      <Div1>
        {Object.keys(food_data).map((food) => {
          return (
            <React.Fragment key={food}>
              <h1>{food}</h1>
              <PlusButton onClick={() => Handler(food, "add")}>+</PlusButton>
              <span>{food_data[`${food}`]}</span>
              <MinusButton onClick={() => Handler(food, "subtract")}>
                -
              </MinusButton>
              <Hr />
            </React.Fragment>
          );
        })}
      </Div1>
      <Flex>
        <Price>
          Total Price: <br></br>
          <span>{props.TotalPrice.toFixed(2)}</span>
        </Price>
        {props.TotalPrice > 0 ? (
          <SubmitButton onClick={props.ModalHandler}>Order Now</SubmitButton>
        ) : (
          <SubmitButtonDisabled disabled onClick={props.ModalHandler}>
            Order Now
          </SubmitButtonDisabled>
        )}
      </Flex>
    </Div>
  );
};

const mapStatetoProps = (state) => {
  return {
    foodlist: state.burger.foodlist,
    TotalPrice: state.burger.TotalPrice,
  };
};

const mapDispatchtoProps = (dispatch: any) => {
  return {
    Add: (food) => dispatch(Add(food)),
    Subtract: (food) => dispatch(Subtract(food)),
    ModalHandler: () => dispatch(OpenModal()),
    setIng: () => dispatch({ type: "SETINGREDIENTS" }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(BurgerInfo);
