import React from "react";
import { attemptMove, attemptJump, handleKeyDown } from "./movement.js";
import { addToStoreBlockingTiles, addToStoreLocation } from "./testHelper.js"
import store from "../../config/store";


describe("Player", () => {

  describe("basic movement", function() {

    addToStoreBlockingTiles([[false, false],[false, false]])

    it("can move east", () => {
      addToStoreLocation([0, 0])
      handleKeyDown({key: "l"})

      expect(store.getState().player.position).toEqual([32, 0])
    });

    it("can move west", () => {
      addToStoreLocation([32, 0])
      handleKeyDown({key: "h"})

      expect(store.getState().player.position).toEqual([0, 0])
    });

    it("can move south", () => {
      addToStoreLocation([0, 0])
      handleKeyDown({key: "j"})

      expect(store.getState().player.position).toEqual([0, 32])
    });

    it("can move north", () => {
      addToStoreLocation([0, 32])
      handleKeyDown({key: "k"})

      expect(store.getState().player.position).toEqual([0, 0])
    });
  
  });

  describe("cases where player can't move", function() {

    it("can not move off the map", function() {
      addToStoreBlockingTiles([[false]])
      addToStoreLocation([0, 0])
      handleKeyDown({key: "k"})


      expect(store.getState().player.position).toEqual([0, 0])
    })

    it("can not move onto a blocking tile", function() {
      addToStoreBlockingTiles([[false, true]])
      addToStoreLocation([0, 0])
      handleKeyDown({key: "l"})


      expect(store.getState().player.position).toEqual([0, 0])
    })

  })

  describe("'w' and 'b' inputs", function() {

    describe("cannot jump if not next to a bin", function() {

      it("does not jump with 'w' command unless next to a bin", function() {
        addToStoreBlockingTiles([[false, false, false]])
        addToStoreLocation([0, 0])
        handleKeyDown({key: "w"})

        expect(store.getState().player.position).toEqual([0, 0])
      })

      it("does not jump with 'b' command unless next to a bin", function() {
        addToStoreBlockingTiles([[false, false, false]])
        addToStoreLocation([64, 0])
        handleKeyDown({key: "b"})

        expect(store.getState().player.position).toEqual([64, 0])
      })

    })

    describe("can jump over bins with the commands 'w' and 'b'", function() {

      it("jumps with 'w' command when next to a bin", function() {
        addToStoreBlockingTiles([[false, true, false]])
        addToStoreLocation([0, 0])
        handleKeyDown({key: "w"})

        expect(store.getState().player.position).toEqual([64, 0])
      })


    it("jumps with 'b' command when next to a bin", function() {
      addToStoreBlockingTiles([[false, true, false]])
      addToStoreLocation([64, 0])
      handleKeyDown({key: "b"})

      expect(store.getState().player.position).toEqual([0, 0])
    })
  })


  // })


  })

  // describe("can jump over bins with the commands 'w' and 'b'", function() {

  //   it("does not jump with 'w' command unless next to a bin", function() {
  //     addToStoreBlockingTiles([[false, false, false]])
  //     addToStoreLocation([0, 0])
  //     handleKeyDown({key: "w"})

  //     expect(store.getState().player.position).toEqual([0, 0])
  //   })
  
  // })

});
