import React, { useEffect, useRef } from "react";
import Logo from "../Logo/Logo";
import { Div, Navlink, Items, HiddenPopOver } from "./styles";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import styled from "styled-components";
import { connect } from "react-redux";
import { Logout } from "../../store/actions/authactions";
import { FaUserCircle } from "react-icons/fa";

const User = styled(BiUserCircle)`
  width: 50px;
  height: 30px;
  fill: black;
  z-index: -20;
`;
const LoggedUser = styled(FaUserCircle)`
  width: 50px;
  height: 30px;
  fill: black;
`;
const LogoLink = styled(Navlink)`
  width: 50px;
  height: 40px;
  position: absolute;
  left: 10px; ;
`;

const NavBar = (props: any) => {
  const btnelement = useRef<HTMLButtonElement>(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (btnelement.current !== null) {
      if (props.totalprice === 0) {
        btnelement.current.disabled = true;
      } else {
        btnelement.current.disabled = false;
      }
    }
  });

  const Logout = () => {
    props.Logout();
    history.push({
      pathname: "/",
      state: {
        from: location.pathname,
      },
    });
  };

  return (
    <Div show={props.menu}>
      <LogoLink to="/" exact>
        <Logo />
      </LogoLink>
      {props.token ? <Items onClick={Logout}>Logout</Items> : null}
      <div className="menu" onClick={props.setmenu}>
        {!props.token ? <User /> : <LoggedUser />}
      </div>
      <HiddenPopOver
        onClick={(e) => {
          e.stopPropagation();
        }}
        popover={props.menu}
      >
        <Navlink to="/" exact>
          <Items>Home</Items>
        </Navlink>
        {!props.token ? (
          <Navlink to="/auth">
            <Items>Signup</Items>
          </Navlink>
        ) : null}

        {props.token ? (
          <React.Fragment>
            <Navlink to="/orders">
              <Items>Orders</Items>
            </Navlink>
          </React.Fragment>
        ) : null}
      </HiddenPopOver>
    </Div>
  );
};
const mapStatetoProps = (state) => {
  return {
    ...state,
    token: state.auth.token,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    Logout: () => dispatch(Logout()),
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(NavBar));
