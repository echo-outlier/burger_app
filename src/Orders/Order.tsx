import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../axios-orders";
import {
  Div,
  CustomerInfo,
  Innerdiv,
  IngredientsInfo,
  Childdiv,
  Flex,
  NoOrders,
} from "./styles";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../HomeScreen/Logo/Spinner";

const Order = (props) => {
  const [orderlist, setorderlist] = useState(null);
  const [spinner, setspinner] = useState(true);
  const history = useHistory();

  // useEffect(() => {
  //   window.addEventListener("beforeunload", alertUser);
  //   return () => {
  //     window.removeEventListener("beforeunload", alertUser);
  //   };
  // }, []);
  // const alertUser = (e) => {
  //   // e.preventDefault();
  //   // localStorage.removeItem("token");
  //   // alert("Windows reloaded");
  //   // e.returnValue = "something";
  // };

  useEffect(() => {
    if (!props.token) {
      history.push("/");
    }
    const userId = localStorage.getItem("userId");
    const queryparam = `?auth=${props.token}&orderBy="userId"&equalTo="${userId}"`;
    axios
      .get(`/BurgerOrders.json${queryparam}`)
      .then((response) => {
        const data = response.data;
        let orders = [];
        Object.keys(data).map((order) => orders.push(data[`${order}`]));
        if (orders.length) setorderlist(orders);
        else setspinner(false);
      })
      .catch((error) => {
        setspinner(false);
      });
  }, [history, props.token]);

  return (
    <Div>
      {orderlist ? (
        orderlist.map((order) => {
          return (
            <Innerdiv>
              <FastfoodIcon style={{ fontSize: "40px" }} />
              <Flex>
                <CustomerInfo>
                  {Object.keys(order).map((info) => {
                    return info === "customer"
                      ? Object.keys(order.customer).map((details) => {
                          return (
                            <Childdiv key={details}>
                              <span>{details + ": "}</span>
                              {order.customer[`${details}`]}
                            </Childdiv>
                          );
                        })
                      : null;
                  })}
                </CustomerInfo>
                <IngredientsInfo>
                  {Object.keys(order).map((info) => {
                    return info === "customer"
                      ? Object.keys(order.foodlist).map((details) => {
                          return (
                            <Childdiv key={details}>
                              <span>{details + ": "}</span>
                              {order.foodlist[`${details}`]}
                            </Childdiv>
                          );
                        })
                      : null;
                  })}
                </IngredientsInfo>
              </Flex>
            </Innerdiv>
          );
        })
      ) : spinner ? (
        <Spinner />
      ) : (
        <NoOrders>No Orders Placed</NoOrders>
      )}
    </Div>
  );
};
const mapStatetoProps = (state) => {
  return {
    ...state,
    token: state.auth.token,
  };
};
export default connect(mapStatetoProps)(Order);
