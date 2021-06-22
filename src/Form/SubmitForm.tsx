import React, { useEffect } from "react";
import { connect } from "react-redux";
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
import {
  ChangeInputValue,
  SubmitOrder,
  CleanBurger,
  ChangeFocus,
  ChangeAllFocus,
} from "../Store/actions/burgeractions";
import * as Types from "../Store/actions/actionTypes";
import { useHistory } from "react-router-dom";

const SubmitForm = (props) => {
  const history = useHistory();

  useEffect(() => {
    if (props.purchased) {
      history.push("/");
    }
  }, [props.purchased, history]);

  const buttonhandler = (event) => {
    event.preventDefault();
    if (props.validate) {
      props.SubmitOrder(
        props.input,
        props.foodlist,
        props.userId,
        props.price,
        props.delivery
      );
    } else {
      alert("Please Fill All the Fields Correctly");
    }
  };

  const ChangeInput = (event, type) => {
    let value = event.target.value;
    switch (type) {
      case Types.FIRST:
        value = value.replace(/[^A-Za-z]/, "");
        break;
      case Types.LAST:
        value = value.replace(/[^A-Za-z]/, "");
        break;
      case Types.CITY:
        value = value.replace(/[^A-Za-z]/, "");
        break;
      case Types.PINCODE:
        value = value.replace(/[^0-9]/, "");
        break;
      case Types.NUMBER:
        value = value.replace(/[^0-9]/, "");
        break;
    }
    props.ChangeInput(type, value);
  };
  return (
    <Form
      id="form"
      onClick={(e) => {
        const el = document.getElementById("form");
        const active = el.contains(document.activeElement);
        if (active) {
          const name = document.activeElement.getAttribute("name");
          props.ChangeFocus(name);
        } else {
          props.ChangeAllFocus();
        }
      }}
    >
      <Div>
        <Name>
          <Inputdiv>
            <Inputname
              type="text"
              name={Types.FIRST}
              placeholder="First Name"
              value={props.input.first.value}
              onChange={(e) => ChangeInput(e, Types.FIRST)}
              focus={props.input.first.focus}
              error={props.input.first.error}
              touched={props.input.first.touched}
            />
            {props.input.first.error !== null &&
            props.input.first.focus === false &&
            props.input.first.touched === true ? (
              <Error>{props.input.first.error}</Error>
            ) : null}
          </Inputdiv>
          <Inputdiv>
            <Inputname
              type="text"
              placeholder="Last Name"
              name={Types.LAST}
              value={props.input.last.value}
              onChange={(e) => ChangeInput(e, Types.LAST)}
              focus={props.input.last.focus}
              error={props.input.last.error}
              touched={props.input.last.touched}
            />
            {props.input.last.error !== null &&
            props.input.last.focus === false &&
            props.input.last.touched === true ? (
              <Error>{props.input.first.error}</Error>
            ) : null}
          </Inputdiv>
        </Name>
        <Name>
          <Inputdiv>
            <Inputname
              type="text"
              placeholder="Pincode"
              name={Types.PINCODE}
              value={props.input.pincode.value}
              onChange={(e) => ChangeInput(e, Types.PINCODE)}
              focus={props.input.pincode.focus}
              error={props.input.pincode.error}
              touched={props.input.pincode.touched}
            />
            {props.input.pincode.error !== null &&
            props.input.pincode.focus === false &&
            props.input.pincode.touched === true ? (
              <Error>{props.input.pincode.error}</Error>
            ) : null}
          </Inputdiv>
          <Inputdiv>
            <Inputname
              type="text"
              placeholder="Mobile No."
              name={Types.NUMBER}
              value={props.input.number.value}
              onChange={(e) => ChangeInput(e, Types.NUMBER)}
              focus={props.input.number.focus}
              error={props.input.number.error}
              touched={props.input.number.touched}
            />
            {props.input.number.error !== null &&
            props.input.number.focus === false &&
            props.input.number.touched === true ? (
              <Error>{props.input.number.error}</Error>
            ) : null}
          </Inputdiv>
        </Name>
        <Selectdiv>
          <div style={{ paddingLeft: "15px" }}>State</div>
          <Select
            onChange={(e) => ChangeInput(e, Types.STATE)}
            value={props.input.state.value}
            name="state"
            required
          >
            <option value="" disabled>
              --Select State--
            </option>
            <option value="Andaman &amp; Nicobar Islands">
              Andaman &amp; Nicobar Islands
            </option>
            <option value="Andhra Pradesh" selected>
              Andhra Pradesh
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu">
              Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu
            </option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu &amp; Kashmir">Jammu &amp; Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
          </Select>
        </Selectdiv>

        <Inputdiv1>
          <Input
            type="text"
            name={Types.CITY}
            placeholder="City"
            value={props.input.city.value}
            onChange={(e) => ChangeInput(e, Types.CITY)}
            focus={props.input.city.focus}
            error={props.input.city.error}
            touched={props.input.city.touched}
          />
          {props.input.city.error !== null &&
          props.input.city.focus === false &&
          props.input.city.touched === true ? (
            <Error>{props.input.city.error}</Error>
          ) : null}
        </Inputdiv1>
        <Selectdiv>
          <div style={{ paddingLeft: "15px" }}>Delivery Type</div>
          <Select
            onChange={(e) => ChangeInput(e, Types.DELIVERY)}
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
  );
};

const mapStatetoProps = (state) => {
  return {
    ...state,
    foodlist: state.burger.foodlist,
    input: {
      first: state.checkout.first,
      last: state.checkout.last,
      state: state.checkout.state,
      city: state.checkout.city,
      pincode: state.checkout.pincode,
      number: state.checkout.mobileno,
    },
    userId: state.auth.userId,
    price: state.burger.TotalPrice,
    delivery: state.checkout.delivery_type,
    purchased: state.checkout.purchased,
    validate: state.checkout.validate,
  };
};

const mapDispatchtoProps = (dispatch: any) => {
  return {
    SubmitOrder: (input, foodlist, userid, price, delivery) =>
      dispatch(SubmitOrder(input, foodlist, userid, price, delivery)),
    CleanBurger: () => dispatch(CleanBurger()),
    ChangeInput: (type, value) => dispatch(ChangeInputValue(type, value)),
    ChangeFocus: (type) => dispatch(ChangeFocus(type)),
    ChangeAllFocus: () => dispatch(ChangeAllFocus()),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(SubmitForm);
