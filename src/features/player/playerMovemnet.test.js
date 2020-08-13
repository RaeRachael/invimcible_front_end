import React from "react";
import { attemptMove, attemptJump } from "./movement.js";
import { addToStoreBlockingTiles, addToStoreLocation } from "./testHelper.js"
import store from "../../config/store";


describe("Player", () => {

  describe("basic movement", function() {

    addToStoreBlockingTiles([[false, false],[false, false]])

    it("can move east", () => {
      addToStoreLocation([0, 0])
      attemptMove("EAST")

      expect(store.getState().player.position).toEqual([32, 0])
    });

    it("can move west", () => {
      addToStoreLocation([32, 0])
      attemptMove("WEST")

      expect(store.getState().player.position).toEqual([0, 0])
    });

    it("can move south", () => {
      addToStoreLocation([0, 0])
      attemptMove("SOUTH")

      expect(store.getState().player.position).toEqual([0, 32])
    });

    it("can move north", () => {
      addToStoreLocation([0, 32])
      attemptMove("NORTH")

      expect(store.getState().player.position).toEqual([0, 0])
    });
  
  });

  describe("cases where player can't move", function() {

    it("can not move off the map", function() {
      addToStoreBlockingTiles([[false]])
      addToStoreLocation([0, 0])
      attemptMove("NORTH")

      expect(store.getState().player.position).toEqual([0, 0])
    })

    it("can not move onto a blocking tile", function() {
      addToStoreBlockingTiles([[false, true]])
      addToStoreLocation([0, 0])
      attemptMove("EAST")

      expect(store.getState().player.position).toEqual([0, 0])
    })

  })

  describe("can jump over a bin with the command 'w' ", function() {

    it("can not move off the map", function() {
      addToStoreBlockingTiles([[false, false, false]])
      addToStoreLocation([0, 0])
      attemptJump("EAST")

      expect(store.getState().player.position).toEqual([0, 0])
    })

  })
  
});
