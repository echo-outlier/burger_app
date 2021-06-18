import styled from "styled-components";
import { Button } from "../../Checkout/styles";

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
`;

export const Div1 = styled.div`
  width: 400px;
  display: grid;
  grid-template-columns: 40% 20% 10% 50px;
  grid-column-gap: 20px;
  h1 {
    text-align: start;
    font-size: 20px;
    color:#ccc;
  }
  span {
    align-self: center;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    color:#ccc;
    font-size: 30px;
    justify-self: center;
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
  justify-self: ${({ info }) =>
    (info === "add" && "end") || (info === "subtract" && "start")};
  &:hover {
    background-color: #ccc;
    color: black;
  }
`;

export const Hr = styled.hr`
  grid-column-start: 1;
  grid-column-end: 5;
  width: 100%;
  color:white;
`;

export const SubmitButton = styled(Button)`
  width: 130px;
  height: 50px;
  font-size: 16px;
  padding: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: bold;
`;

export const SubmitButtonDisabled = styled.button`
  width: 130px;
  height: 50px;
  font-size: 16px;
  padding: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: bold;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 15px 0;
  span {
    color: #ccc;
    font-family: Verdana, sans-serif;
  }
`;
