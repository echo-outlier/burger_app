import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 20px;
  margin:auto;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    width:90%;
  }
`;

export const NoOrders = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export const Innerdiv = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  font-size: 14px;
  gap: 10px;
  color: #7dff00;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #4b79a1, #283e51);
  border-radius: 5px;
  box-shadow: 2px 2px 2px black;
  padding: 10px;
  svg {
    fill: #eee;
  }
  @media screen and (max-width: 600px) {
    height:auto;
  }
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 600px) {
    flex-direction: row;
  }
`;

export const CustomerInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const IngredientsInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 18px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Childdiv = styled.div`
  /* border: 2px solid black; */
  padding: 5px;
  text-align: center;
  span {
    font-weight: bold;
    text-transform: capitalize;

    color: lightgray;
  }
`;
