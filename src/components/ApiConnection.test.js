import React from "react";
import World from "../features/world";
import makeRequest from "./API.js";
import store from "../config/store";
import {shallow} from 'enzyme';


describe("Level 1 connection", () => {

  test("can connect to JSON and add to state", async () => {
    const fakeResponse = {
      mapArray: [
        ["B", "B"],
        ["B", "B"],
      ],
      startPoint: {
        x: 1,
        y: 1,
      }
    };

    const mapOutput = {
      loaded: true,
      tiles: fakeResponse.mapArray,
      level: 1,
    }

    const playerOutput = {
      startingPoint: [32, 32],
      walkIndex: 0
    }

    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fakeResponse),
      };
      return Promise.resolve(fetchResponse);
    });

    makeRequest(1)

    setTimeout(function (){
      expect(store.getState().map).toBe(mapOutput);
      expect(store.getState().player).toBe(playerOutput);
      
      }, 100)
  });
});
