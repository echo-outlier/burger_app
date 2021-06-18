import React, { memo } from "react";
import { Backdrop, Div, Lidiv, Head, Button, Button1 } from "./styles";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const check = (prevprops, nextprops) => {
  return prevprops.modalstate === nextprops.modalstate;
};

const Modal = (props) => {
  const foodlist = props.foodlist;
  const history = useHistory();

  const gotocheckout = () => {
    props.CloseModal();
    props.GoToCheckout();
    history.push("/checkout");
  };

  return props.modalstate ? (
    <Backdrop onClick={props.CloseModal} value={props.modalstate}>
      <Div onClick={(e) => e.stopPropagation()}>
        <div style={{ position: "relative" }}>
          <h3>Your Order</h3>
          <h4>A delicious Burger with the following Ingredients</h4>
          <Lidiv>
            {Object.keys(foodlist).map((food) => {
              return (
                <React.Fragment key={food}>
                  <li>
                    {food}: {foodlist[`${food}`]}
                  </li>
                </React.Fragment>
              );
            })}
          </Lidiv>
          <div>
            <Head>Total Price: <span>{props.TotalPrice.toFixed(2)}</span></Head>
            <Head>Continue to Checkout?</Head>
          </div>
          <div>
            <Button onClick={props.CloseModal}>CANCEL</Button>
            <Button1 onClick={gotocheckout}>CHECKOUT</Button1>
          </div>
        </div>
      </Div>
      )
    </Backdrop>
  ) : null;
};

const mapStatetoProps = (state) => {
  return {
    foodlist: state.burger.foodlist,
    modalstate: state.burger.modalstate,
    TotalPrice: state.burger.TotalPrice,
  };
};

const mapDispatchtoProps = (dispatch: any) => {
  return {
    GoToCheckout: () => dispatch({ type: "GoToCheckout" }),
    CloseModal: () => dispatch({ type: "CloseModal" }),
  };
};

export default memo(connect(mapStatetoProps, mapDispatchtoProps)(Modal), check);
