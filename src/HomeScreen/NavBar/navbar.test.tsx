import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Navbar from "./navbar";
import { Navlink } from "./styles";
import Logo from "../Logo/Logo";

configure({ adapter: new Adapter() });

describe("<NavItems />", () => {
  it("should only render two <Navlinks /> Items if not authenticated", () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper.contains(<Navlink to="/some" />)).toHaveLength(1);
  });
});
