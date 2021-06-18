import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  background: linear-gradient(to left, #4b79a1, #283e51);
  height: 400px;
  width: 600px;
  margin: 20px auto;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Div1 = styled(Div)`
  gap:5px;
  .text{
    font-size:14px;
    text-align: center;
    margin-top:10px;
    &:hover{
      cursor: pointer;
      font-weight:bold;
    }
  }
`

export const Name = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const Input = styled.input`
  width: 300px;
  font-weight: bolder;
  height: 40px;
  border: none;
  font-size: 15px;
  padding: 15px;
  outline: none;
  transition: background-color, color 0.3s ease;
  background-color: #eee;
  &:focus {
    background-color: #201d1d;
    color: white;
  }
`;

export const Inputdiv = styled.div`
  width: 140px;
  background-color: #eee;
`;

export const Inputdiv1 = styled.div`
  width: 300px;
  background-color: #eee;
`;

export const Inputname = styled.input`
  width: 140px;
  font-weight: bolder;
  background-color: #eee;
  height: 40px;
  border: none;
  font-size: 15px;
  padding: 15px;
  outline: none;
  transition: background-color, color 0.3s ease;
  &:focus {
    background-color: #201d1d;
    color: white;
  }
`;

export const Error = styled.div`
  margin-top: 5px;
  font-size: 12px;
`;

export const Select = styled.select`
  width: 300px;
  height: auto;
  border: none;
  font-size: 12px;
  padding: 0px 10px;
  outline: none;
  border-radius: 5px;
  background-color: #eee;
`;

export const Selectdiv = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-weight: bolder;
  font-size: 12px;
  height:40px;
  background-color: #eee;
`;

export const Button = styled.button`
  background-color: #eee;
  position: relative;
  text-align: center;
  font-weight: bolder;
  width: 150px;
  box-sizing: border-box;
  height: 50px;
  font-size: 16px;
  color: black;
  border: none;
  padding: 10px;
  transition: cursor ease-in 0.3s, color ease-in 0.3s,
    background-color ease-in 0.3s;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: white;
    bottom: 0;
    left: 0;
  }
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: white;
    top: 0;
    right: 0;
  }
  &:hover {
    cursor: pointer;
    color: white;
    background-color: black;
    box-shadow: 2px 2px 2px black;
  }

  &:hover::after,
  &:hover::before {
    width: 100%;
    transition: 0.3s ease-in;
  }
`;
