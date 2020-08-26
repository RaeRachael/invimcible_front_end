import React from "react";
import HelpScreenLevel1 from "./helpScreenLevel1.jsx";
import HelpScreenLevel2 from "./helpScreenLevel2.jsx";
import { shallow } from "enzyme";

describe("HelpScreenLevel1", () => {

  it("renders help information", () => {
    const wrapper = shallow(<HelpScreenLevel1 />);
    const info = "Movement:";
    const list = [
      "h: left",
      "j: down",
      "k: up",
      "l: right",
      "q: quit game",
      "Clear Input to Continue"
    ]
    expect(wrapper.contains(info)).toEqual(true);
    for (var i = 0; i ++; i < list.length) {
      console.log(i)
      expect(wrapper.contains(list[i])).toEqual(true)
    }
  });

});

describe("HelpScreenLevel2", () => {

  it("renders help information", () => {
    const wrapper = shallow(<HelpScreenLevel2 />);
    const info = "Movement:";
    const list = [
      "h: left",
      "j: down",
      "k: up",
      "l: right",
      "q: quit game",
      "w: beginning of next word",
      "b: beginning of previous word",
      "Clear Input to Continue"
    ]
    expect(wrapper.contains(info)).toEqual(true);
    for (var i = 0; i ++; i < list.length) {
      console.log(i)
      expect(wrapper.contains(list[i])).toEqual(true)
    }
  });

});
