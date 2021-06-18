import React from "react";
import styled from "styled-components";
import {
  Input,
  Form,
  Div,
  Button,
  Inputname,
  Name,
  Select,
  Error,
  Inputdiv,
  Inputdiv1,
  Selectdiv,
} from "./styles";
import Spinner from "../HomeScreen/Logo/Spinner";
import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { RedirectFrom } from "../store/actions/authactions";
import {
  SubmitOrder,
  Email,
  Number,
  First,
  Last,
  Delivery,
  CleanBurger,
} from "../store/actions/burgeractions";
import { useEffect } from "react";

const Head = styled.h1`
  text-align: center;
  margin-top: 20px;
  height: 40px;
`;

const Checkout = (props) => {
  const [showspinner, setshowspinner] = useState(false);
  const history = useHistory();
  const redirect = <Redirect to="/" />;

  useEffect(() => {
    if (props.isBM) {
      history.push("/");
    }

    if (!props.token) {
      props.RedirectFrom("checkout");
      history.push("/signup");
    }
  }, []);

  const showerror = () => {};
  const buttonhandler = (event) => {
    event.preventDefault();
    setshowspinner(true);
    props.Submit();
    setshowspinner(false);
    if (props.validate) {
      history.push("/");
      props.CleanBurger();
    } else {
      showerror();
    }
  };

  let returnbody = (
    <>
      <Head>Your Delecious Burger</Head>
      {props.children}
      <Form>
        <Div>
          <Name>
            <Inputdiv>
              <Inputname
                pattern=""
                type="text"
                placeholder="First Name"
                value={props.first}
                onChange={(e) => {
                  let value = e.target.value;
                  value = value.replace(/[^A-Za-z]/, "");
                  props.First(value);
                }}
              />
              {props.firsterror ? <Error>{props.firsterror}</Error> : null}
            </Inputdiv>
            <Inputdiv>
              <Inputname
                type="text"
                placeholder="Last Name"
                value={props.last}
                onChange={(e) => {
                  let value = e.target.value;
                  value = value.replace(/[^A-Za-z]/, "");
                  props.Last(value);
                }}
              />
              {props.lasterror ? <Error>{props.lasterror}</Error> : null}
            </Inputdiv>
          </Name>
          <Inputdiv1>
            <Input
              type="email"
              placeholder="Email Id"
              value={props.email}
              onChange={(e) => props.Email(e.target.value)}
            />
            {props.emailerror ? <Error>{props.emailerror}</Error> : null}
          </Inputdiv1>
          <Inputdiv1>
            <Input
              type="number"
              placeholder="Mobile Number"
              value={props.number}
              onChange={(e) => {
                let value = e.target.value;
                props.Number(value);
              }}
            />
            {props.number ? <Error>{props.numbererror}</Error> : null}
          </Inputdiv1>
          <Selectdiv>
            <div style={{ paddingLeft: "15px" }}>Delivery Type</div>
            <Select
              onChange={(e) => props.Delivery(e.target.value)}
              value={props.delivery}
              name="deliverytype"
            >
              <option value="Prime">Prime</option>
              <option value="Non-Prime">Non Prime</option>
            </Select>
          </Selectdiv>
        </Div>
        <Div>
          <Button onClick={(event) => buttonhandler(event)}>Submit</Button>
        </Div>
      </Form>
    </>
  );
  if (showspinner) {
    returnbody = <Spinner />;
  }

  return <React.Fragment>{returnbody}</React.Fragment>;
};

const mapStatetoProps = (state) => {
  return {
    ...state,
    foodlist: state.burger.foodlist,
    first: state.checkout.first.value,
    last: state.checkout.last.value,
    email: state.checkout.email.value,
    number: state.checkout.mobileno.value,
    delivery: state.checkout.delivery_type,
    isBM: state.burger.isBurgerEmpty,
    validate: state.checkout.validate,
    firsterror: state.checkout.first.error,
    lasterror: state.checkout.last.error,
    emailerror: state.checkout.email.error,
    numbererror: state.checkout.mobileno.error,
    token: state.auth.token,
    redirect: state.auth.redirectFrom,
  };
};

const mapDispatchtoProps = (dispatch: any) => {
  return {
    Submit: () => dispatch(SubmitOrder()),
    First: (value) => dispatch(First(value)),
    Last: (value) => dispatch(Last(value)),
    Email: (value) => dispatch(Email(value)),
    Number: (value) => dispatch(Number(value)),
    CleanBurger: () => dispatch(CleanBurger()),
    Delivery: (value) => dispatch(Delivery(value)),
    RedirectFrom: (location) => dispatch(RedirectFrom(location)),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Checkout);
