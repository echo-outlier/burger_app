import styled from "styled-components";

interface BackdropProps {
  value: boolean;
}
export const Backdrop = styled.div<BackdropProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: ${(props) => {
    if (props.value === true) {
      return "hidden";
    } else {
      return "scroll";
    }
  }};
`;

export const Div = styled.div`
  position: absolute;
  height: 400px;
  width: 600px;
  background: linear-gradient(to left, #4b79a1, #283e51);
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  @media screen and (max-width: 600px) {
    width: 80%;
    h4 {
      font-size: 15px;
    }
  }
`;

export const Lidiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 250px;
  color: #ccc;
  @media screen and (max-width: 600px) {
    padding-left:0;
    align-items: center;
    li {
      font-size: 15px;
    }
  }
`;

export const Button = styled.button`
  width: 90px;
  height: 30px;
  text-align: center;
  padding: 4px;
  font-weight: bold;
  background-color: #eee;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Button1 = styled(Button)`
  margin-left: 20px;
  background-color: #eee;
`;
export const Head = styled.h4`
  span {
    color: #ccc;
    font-family: Verdana, sans-serif;
    @media screen and (max-width: 600px) {
      font-size: 15px;
    }
  }
`;
