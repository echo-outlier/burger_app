import React from "react";
import Burgerinfo from "./HomeScreen/BurgerInfo/BurgerInfo";
import Modal from "./HomeScreen/Modal/modal";
import Burger from "./HomeScreen/BurgerDisplay/Burger";

const HomePage = () => {
  return (
    <React.Fragment>
      <Burger />
      <Burgerinfo />
      <Modal />
    </React.Fragment>
  );
};

export default HomePage;
