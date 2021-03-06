import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface DivProps {
  show: string;
}

export const Div = styled.div<DivProps>`
  position: relative;
  height: 56px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(to left, #4b79a1, #283e51);
  .menu {
    svg {
      fill: ${(props) => (props.show === "none" ? "black" : "white")};
      &:hover {
        fill: #ccc;
        cursor: pointer;
      }
    }
  }
`;

export const Linkdiv = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

interface HiddenPopOverProps {
  popover: string;
}
export const HiddenPopOver = styled.div<HiddenPopOverProps>`
  display: ${(props) => props.popover};
  position: absolute;
  top: 25px;
  right: 0;
  flex-direction: column;
  width: 160px;
  justify-content: center;
  align-items: strech;
  margin-top: 20px;
  z-index: 1;
  a {
    width: 100%;
    padding: 5px;
    text-align: center;
    background: linear-gradient(to left, #4b79a1, #283e51);
    &:hover {
      button {
        color: #ccc;
      }
    }
  }
`;

export const Items = styled.button`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  background-color: inherit;
  border: none;
  &:hover {
    color: #ccc;
  }
`;

export const Items1 = styled.button`
  font-size: 18px;
  /* margin-right: 20px; */
  position: relative;
  font-weight: bold;
  cursor: pointer;
  background-color: inherit;
  border: none;

  &:enabled {
    &:hover {
      color: #d16b2b;
    }
  }
`;

export const Navlink = styled(NavLink)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
