import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { H1, Form, Div, Div1, Error, Inputdiv1, Button, Input } from "./styles";
import { auth, isAuthencated } from "../store/actions/authactions";
import Spinner from "../HomeScreen/Logo/Spinner";
import { RedirectFrom } from "../store/actions/authactions";

const Auth = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isup, setisup] = useState(false);
  const [CheckoutText, setCheckoutText] = useState(null);
  const history = useHistory();

  const buttonhandler = (event) => {
    event.preventDefault();
    props.Auth(email, password, isup);
  };

  useEffect(() => {
    if (props.token) {
      if (props.redirectFrom === "checkout") {
        props.RedirectFrom("auth");
        history.push("/checkout");
      }
      history.push("/");
    }

    if (props.redirectFrom === "checkout") {
      setCheckoutText(<H1>Please Login Before Checking Out</H1>);
    }
  }, []);

  let errorMsg = null;
  if (props.error) {
    errorMsg = props.error;
  }

  let text = "Sign In";
  if (isup) {
    text = "Sign Up";
  }

  let form = (
    <React.Fragment>
      {isup ? <H1>Sign Up</H1> : <H1>Sign In</H1>}
      {CheckoutText}
      <Form>
        <Div>
          <Inputdiv1>
            <Input
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            {/* {props.emailerror ? <Error>{props.emailerror}</Error> : null} */}
          </Inputdiv1>
          <Inputdiv1>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            {/* {props.number ? <Error>{props.numbererror}</Error> : null} */}
          </Inputdiv1>
        </Div>
        <Div1>
          <Button type="submit" onClick={(event) => buttonhandler(event)}>
            {isup ? "SignUp" : "SignIn"}
          </Button>
          <div className="text" onClick={() => setisup(!isup)}>
            {isup ? "Existing User? Sign In" : "New Here? Sign Up"}
          </div>
        </Div1>
        <Error>{props.error}</Error>
      </Form>
    </React.Fragment>
  );

  if (props.loading) {
    form = <Spinner />;
  }

  return <React.Fragment>{form}</React.Fragment>;
};

const mapStatetoProps = (state) => {
  return {
    ...state,
    loading: state.auth.loading,
    error: state.auth.error,
    redirect: state.auth.redirect,
    token: state.auth.token,
    redirectFrom: state.auth.redirectFrom,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    Auth: (email, password, isup) => dispatch(auth(email, password, isup)),
    isAuthenticated: () => dispatch(isAuthencated()),
    RedirectFrom: (location) => dispatch(RedirectFrom(location)),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Auth);