import React from "react";
import BurgerIngredient from "./BurgerIngredients";
import styled from "styled-components";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { CleanBurger } from "../../Store/actions/burgeractions";

export const Div = styled.div`
  height: 450px;
  width: 100%;
  overflow: auto;
  position: relative;
  h2 {
    text-align: center;
  }
  @media screen and (max-width: 700px) {
    height: 400px;
    h2 {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 600px) {
    height: 350px;
    h2 {
      font-size: 17px;
    }
  }
  @media screen and (max-width: 500px) {
    height: 300px;
    h2 {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 400px) {
    height: 250px;
    h2 {
      font-size: 10px;
    }
  }
`;

const Clean = styled.div`
  background: linear-gradient(to left, #4b79a1, #283e51);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  left: 10px;
  width: 100px;
  height: 45px;
  text-align: center;
  padding: 5px;
  font-weight: bold;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    color: white;
    background: linear-gradient(to right, #4b79a1, #283e51);
    transform: scale(1.05);
  }
  @media screen and (max-width: 600px) {
    width: 70px;
    height: 30px;
    font-size: 15px;
    left: 0;
  }
`;

const Burger = (props: any) => {
  const location = useLocation();

  let final_arr: any = null;
  final_arr = Object.keys(props.foodlist).map((food) => {
    return (
      <BurgerIngredient type={food} value={props.foodlist[food]} key={food} />
    );
  });
  const display_text = <h2>Add Some Ingredients Here</h2>;

  return (
    <Div>
      {location.pathname === "/" ? (
        <Clean onClick={props.CleanBurger}>Clean</Clean>
      ) : null}
      <BurgerIngredient type="BreadTop" value="1" />
      {props.isBM ? display_text : final_arr}
      <BurgerIngredient type="BreadBottom" value="1" />
    </Div>
  );
};

const mapStatetoProps = (state) => {
  return {
    ...state,
    foodlist: state.burger.foodlist,
    isBM: state.burger.isBurgerEmpty,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    CleanBurger: () => dispatch(CleanBurger()),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Burger);
