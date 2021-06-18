import React from "react";
import styled from "styled-components";

const BreadBottom = styled.div`
  height: 13%;
  width: 50%;
  background: linear-gradient(#f08e4a, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
`;
const BreadTop = styled.div`
  height: 20%;
  width: 50%;
  background: linear-gradient(#c87647, #e27b36);
  /* background: linear-gradient(#bc581e, #e27b36); */
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
  position: relative;
`;
const Meat = styled.div`
  width: 50%;
  height: 8%;
  background: linear-gradient(#7f3608, #702e05);
  margin: 2% auto;
  border-radius: 15px;
`;
const Cheese = styled.div`
  width: 52%;
  height: 4.5%;
  margin: 2% auto;
  background: linear-gradient(#f4d004, #d6bb22);
  border-radius: 20px;
`;
const Salad = styled.div`
  width: 50%;
  height: 7%;
  margin: 2% auto;
  background: linear-gradient(#228c1d, #91ce50);
  border-radius: 20px;
`;
const Bacon = styled.div`
  width: 50%;
  height: 3%;
  background: linear-gradient(#384d64, #431fc6);
  margin: 2% auto;
`;

const BurgerIngredients = (props) => {
  const item = props.type;
  const value = +props.value;
  const arr: any = [];
  for (let i = 0; i < value; i++) {
    arr.push(1);
  }
  switch (item) {
    case "BreadBottom":
      return arr.map((person, index) => {
        return <BreadBottom key={index} />;
      });
    case "BreadTop":
      return arr.map((person, index) => {
        return <BreadTop key={index} />;
      });
    case "Salad":
      return arr.map((person, index) => {
        return <Salad key={index} />;
      });
    case "Cheese":
      return arr.map((person, index) => {
        return <Cheese key={index} />;
      });
    case "Bacon":
      return arr.map((person, index) => {
        return <Bacon key={index} />;
      });
    case "Meat":
      return arr.map((person, index) => {
        return <Meat key={index} />;
      });
  }
};

export default BurgerIngredients;
