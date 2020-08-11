import React from "react";
import { attemptMove } from "./movement.js";
import { addToStoreBlockingTiles } from "./testHelper.js"
import store from "../../config/store";


describe("Player", () => {

  describe("basic movement", function() {

    addToStoreBlockingTiles([[false, false],[false, false]])

    it("can move east", () => {
      store.dispatch({
        type: "UPDATE_PLAYER_STORE",
        payload: {
          position: [0, 0],
          walkIndex: 0
        }
      })
      attemptMove("EAST")

      expect(store.getState().player.position).toEqual([32, 0])
    });

    it("can move west", () => {
      store.dispatch({
        type: "UPDATE_PLAYER_STORE",
        payload: {
          position: [32, 0],
          walkIndex: 0
        }
      })
      attemptMove("WEST")

      expect(store.getState().player.position).toEqual([0, 0])
    });

    it("can move south", () => {
      store.dispatch({
        type: "UPDATE_PLAYER_STORE",
        payload: {
          position: [0, 0],
          walkIndex: 0
        }
      })
      attemptMove("SOUTH")

      expect(store.getState().player.position).toEqual([0, 32])
    });

    it("can move north", () => {
      store.dispatch({
        type: "UPDATE_PLAYER_STORE",
        payload: {
          position: [0, 32],
          walkIndex: 0
        }
      })
      attemptMove("NORTH")

      expect(store.getState().player.position).toEqual([0, 0])
    });
  
  });

  describe("cases where player can't move", function() {

    it("can not move off the map", function() {
      addToStoreBlockingTiles([[false]])
      store.dispatch({
        type: "UPDATE_PLAYER_STORE",
        payload: {
          position: [0, 0],
          walkIndex: 0
        }
      })
      attemptMove("NORTH")

      expect(store.getState().player.position).toEqual([0, 0])
    })

    it("can not move onto a blocking tile", function() {
      addToStoreBlockingTiles([[false, true]])
      store.dispatch({
        type: "UPDATE_PLAYER_STORE",
        payload: {
          position: [0, 0],
          walkIndex: 0
        }
      })
      attemptMove("EAST")

      expect(store.getState().player.position).toEqual([0, 0])
    })

  })
  
});
