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
} from "./styles";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../HomeScreen/Logo/Spinner";

const Order = (props) => {
  const [orderlist, setorderlist] = useState(null);
  const history = useHistory();
  useEffect(() => {
    if (!props.token) {
      history.push("/");
    }
    axios
      .get("/BurgerOrders.json")
      .then((response) => {
        console.log(response.data);
        const data = response.data;
        let orders = [];
        Object.keys(data).map((order) => orders.push(data[`${order}`]));
        setorderlist(orders);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Text = styled(Skeleton)`
    width: 200px;
    height: 200px;
    margin: 5px;
  `;
  const Rect = styled(Skeleton)`
    width: 100%;
    height: 120px;
    margin: 5px;
    .MuiSkeleton-root {
      height: auto;
    }
  `;
  const Circle = styled(Skeleton)`
    width: 200px;
    height: 200px;
    margin: 5px;
  `;

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
                      ? Object.keys(order.ingredients).map((details) => {
                          return (
                            <Childdiv key={details}>
                              <span>{details + ": "}</span>
                              {order.ingredients[`${details}`]}
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
      ) : (
        <Spinner />
        // <Rect variant="rect" height={120} />
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
