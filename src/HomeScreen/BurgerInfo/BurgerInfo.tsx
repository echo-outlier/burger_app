import React from "react";
// @ts-ignore
import { connect } from "react-redux";
import {
  Hr,
  Div,
  Price,
  Div1,
  Buttonstyle,
  Flex,
  SubmitButton,
  SubmitButtonDisabled,
  PlusButton,
  MinusButton,
} from "./styles";
import { Add, Subtract, OpenModal } from "../../store/actions/burgeractions";

const BurgerInfo = (props: any) => {
  const food_data = props.foodlist;

  return (
    <Div height={window.innerHeight}>
      <Div1>
        {Object.keys(food_data).map((food) => {
          return (
            <React.Fragment key={food}>
              <h1>{food}</h1>
              <PlusButton onClick={() => props.Add(food)}>+</PlusButton>
              <span>{food_data[`${food}`]}</span>
              <MinusButton onClick={() => props.Subtract(food)}>
                -
              </MinusButton>
              <Hr />
            </React.Fragment>
          );
        })}
      </Div1>
      <Flex>
        <Price>
          Total Price: <span>{props.TotalPrice.toFixed(2)}</span>
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
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(BurgerInfo);
