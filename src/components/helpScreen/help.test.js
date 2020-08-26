import React from "react";
import HelpScreenLevel1 from "./helpScreenLevel1.jsx";
import HelpScreenLevel2 from "./helpScreenLevel2.jsx";
import Help from "./help.jsx";
import store from "../../config/store"
import { shallow } from "enzyme";

jest.mock("./helpScreenLevel1.jsx", () => {
  return function Level1(props) {
    console.log("Called")
    return ( <p>helpScreenLevel1</p> );
  };
})

describe( "Help component", () => {

  it("calls level 1 helpcreen if level is 1", () => {
    store.dispatch({
      type: "UPDATE_MAP_STORE",
      payload: {
        loaded: true,
        tiles: [],
        level: 1
      },
    })
    const wrapper = shallow(<Help />)
    expect(wrapper.contains("h")).toEqual(true)
  })

})