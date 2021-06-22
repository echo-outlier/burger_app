import React from "react";
import styled from "styled-components";
import Spinner from "../HomeScreen/Logo/Spinner";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import SubmitForm from "../Form/SubmitForm";

const Head = styled.h1`
  text-align: center;
  margin-top: 20px;
  height: 40px;
  @media screen and (max-width: 400px) {
    height: 70px;
  }
`;

const Checkout = (props) => {
  const history = useHistory();
  const location = history.location;

  useEffect(() => {
    if (props.isBM) {
      history.push("/");
    }
    if (location.state) {
      history.replace({
        pathname: location.state.redirect,
        state: { redirect: "/checkout" },
      });
    }
  }, [props.isBM, history,location]);

  let returnbody = (
    <>
      <Head>Your Delecious Burger</Head>
      {props.children}
      <SubmitForm {...props} />
    </>
  );
  if (props.loading) {
    returnbody = <Spinner />;
  }

  return <React.Fragment>{returnbody}</React.Fragment>;
};

const mapStatetoProps = (state) => {
  return {
    ...state,
    foodlist: state.burger.foodlist,
    isBM: state.burger.isBurgerEmpty,
    token: state.auth.token,
    redirect: state.auth.redirectFrom,
    loading: state.checkout.loading,
  };
};

const mapDispatchtoProps = (dispatch: any) => {
  return {};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Checkout);
