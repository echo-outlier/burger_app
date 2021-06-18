import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Innerdiv = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  font-size:14px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  /* border: 2px black solid; */
  border-radius: 5px;
  background-color: #ddd;
  box-shadow: 2px 2px 2px #aaa;
  padding:10px;
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

export const CustomerInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const IngredientsInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 18px;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const Childdiv = styled.div`
    border:2px solid black;
    padding:5px;
    text-align: center;
    span{
        font-weight: bold;
        text-transform: capitalize;
    }
`
