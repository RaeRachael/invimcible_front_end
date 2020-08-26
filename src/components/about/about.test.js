import React from 'react'
import About from './index.jsx'
import { shallow } from 'enzyme'

describe('About', () => {

  it("renders team information", () => {
    const wrapper = shallow(<About />);
    const info = <p> Hi, we are the creators of The adventures of Vim. </p>
    expect(wrapper.contains(info)).toEqual(true);
  })

  it("renders team names", () => {
    const wrapper = shallow(<About />);
    const names = ["<p1>Sophie Brown</p1>", "<p1>Al Sumner</p1>", "<p1>Tristan Langford</p1>", "<p1>Rachael Ewins</p1>", "<p1>Nadine Loepfe</p1>", "<p1>Katie McDonagh</p1>"]
    for(let i = 0; i ++; i < names.length){
      expect(wrapper.contains(names[i])).toEqual(true);
    }
  })

})
