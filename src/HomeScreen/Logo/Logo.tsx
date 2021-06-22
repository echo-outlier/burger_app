import React from "react";
import styled from "styled-components";
import burgerlogo from "../../asset/images/logo.png";


const Image = styled.img`
  width: 100%;
  height: 100%;
  background-color: inherit;
`;

const Logo = () => {
  return <Image src={burgerlogo} alt="not displayed" />;
};

export default Logo;
