import { useState, useEffect } from "react";
import Burger from "./HomeScreen/BurgerDisplay/Burger";
import styled from "styled-components";

import NavBar from "./HomeScreen/NavBar/navbar";
import { Route } from "react-router-dom";
import Checkout from "./Checkout/checkout";
import GlobalStyle from "./Globalstyles";
import Order from "./Orders/Order";
import { connect } from "react-redux";
import Auth from "./Auth/auth";
import { isAuthencated } from "./store/actions/authactions";
import Spinner from "./HomeScreen/Logo/Spinner";
import { useHistory, useLocation } from "react-router-dom";
import HomePage from "./HomePage";

const Div = styled.div`
  width: 800px;
  margin: auto;
`;

const Backdrop = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  height: 100vh;
`;

const App = (props) => {
  const [menu, setmenu] = useState("none");
  const history = useHistory();
  console.log(process.env.REACT_APP_NOT_SECRET_CODE);
  useEffect(() => {
    props.isAuthenticated();
  }, []);

  const menuhandler = () => {
    if (menu === "none") {
      setmenu("flex");
    } else {
      setmenu("none");
    }
  };
  if (props.loading) {
    return <Spinner />;
  }

  return (
    <Backdrop
      onClick={(e) => {
        if (menu == "none") {
          e.stopPropagation();
        } else {
          setmenu("none");
        }
      }}
    >
      <Div>
        <GlobalStyle />
        <NavBar
          menu={menu}
          setmenu={menuhandler}
          totalprice={props.TotalPrice}
        />
        <Route path="/" exact component={HomePage} />
        <Route path="/orders" component={Order} />
        <Route path="/checkout">
          <Checkout>
            <Burger />
          </Checkout>
        </Route>
        <Route path="/auth" component={Auth} />
      </Div>
    </Backdrop>
  );
};

const mapStatetoProps = (state) => {
  return {
    ...state,
    foodlist: state.burger.foodlist,
    Pricelist: state.burger.Pricelist,
    TotalPrice: state.burger.TotalPrice,
    token: state.auth.token,
    loading: state.auth.loading,
    redirect: state.auth.redirectFrom,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    isAuthenticated: () => dispatch(isAuthencated()),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
