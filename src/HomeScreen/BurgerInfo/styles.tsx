import styled from "styled-components";
import { Button } from "../../Form/styles";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

interface ButtonProps {
  info: string;
}

interface DivProps {
  height: number;
}

export const Div = styled.div<DivProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: ${(props) => props.height - (450 + 56)}px;
  background: linear-gradient(to left, #4b79a1, #283e51);
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Div1 = styled.div`
  width: 400px;
  display: grid;
  grid-template-columns: 55% 15% 15% 15%;
  /* grid-column-gap: 20px; */
  h1 {
    text-align: start;
    font-size: 20px;
    color: #ccc;
  }
  span {
    align-self: center;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    color: #ccc;
    font-size: 30px;
    justify-self: center;
  }
  @media screen and (max-width: 600px) {
    width:80%;
    margin-top: 20px;
    h1 {
      font-size: 15px;
    }
    span {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 400px) {
    width:80%;
    margin-top: 20px;
    h1 {
      font-size: 13px;
    }
    span {
      font-size: 15px;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Buttonstyle = styled.button<ButtonProps>`
  border: none;
  width: 30px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
  align-self: center;
  border-radius: 20px;
  color: white;
  background-color: black;
  &:hover {
    background-color: #ccc;
    color: black;
  }
`;

export const PlusButton = styled(AiFillPlusCircle)`
  width: 30px;
  height: 30px;
  font-size: 20px;
  fill: #ddd;
  cursor: pointer;
  align-self: center;
  display: flex;
  justify-self: flex-end;
  &:hover {
    fill: black;
  }
  @media screen and (max-width: 600px) {
    width:20px;
    height:20px;
  }
`;

export const MinusButton = styled(AiFillMinusCircle)`
  width: 30px;
  height: 30px;
  font-size: 20px;
  fill: #ddd;
  cursor: pointer;
  align-self: center;
  display: flex;
  justify-self: flex-start;
  &:hover {
    fill: black;
  }
  @media screen and (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;

export const Hr = styled.hr`
  grid-column-start: 1;
  grid-column-end: 5;
  width: 100%;
  color: white;
`;

export const SubmitButton = styled(Button)`
  width: 130px;
  height: 50px;
  font-size: 16px;
  padding: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    width: 100px;
    height: 35px;
    font-size: 14px;
  }
`;

export const SubmitButtonDisabled = styled.button`
  width: 130px;
  height: 50px;
  font-size: 16px;
  padding: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: bold;
  &:disabled {
    &:hover {
      ::after {
        content: "Burger is EMPTY";
        /* position: relative; */
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        color: white;
        font-size: 12px;
        margin-top: 10px;
        height: 20px;
        border: 2px solid black;
        padding: 5px;
        white-space: nowrap;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 5px;
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100px;
    height: 35px;
    font-size: 14px;
    &:disabled {
      &:hover {
        ::after {
          display: inline-block;
          font-size: 12px;
          margin-top: -10px;
          padding: 5px;
        }
      }
    }
  }
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 15px 0;
  text-align: center;
  span {
    color: #ccc;
    font-family: Verdana, sans-serif;
  }
`;

// justify-self: ${({ info }) =>
//   (info === "add" && "end") || (info === "subtract" && "start")};
