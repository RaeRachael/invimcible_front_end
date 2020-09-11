import React from "react";
import App from "./App.js";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../src/config/store";

jest.mock("./App.js", () => {
  return {
    default: () => {
      return <div>Test</div>
    }
  }
})

describe("Map", () => {
  it("renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <div>
          Test
        </div>
      </Provider>
    )
  })
})
