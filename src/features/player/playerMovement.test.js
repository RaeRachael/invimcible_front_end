import React from "react";
import { handleKeyDown, vimMoves } from "./movement.js";
import { addToStoreTiles, addToStoreLocation } from "./testHelper.js"
import store from "../../config/store";


describe("basic movement", () =>  {

  addToStoreTiles([[false, false],[false, false]])

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

describe("cases where player can't move", () =>  {

  it("can not move off the map", () =>  {
    addToStoreTiles([[false]])
    addToStoreLocation([0, 0])
    handleKeyDown({key: "k"})

    expect(store.getState().player.position).toEqual([0, 0])
  })

  it("can not move onto a blocking tile", () =>  {
    addToStoreTiles([[false, true]])
    addToStoreLocation([0, 0])
    handleKeyDown({key: "l"})

    expect(store.getState().player.position).toEqual([0, 0])
  })

  it("can not move if command box in use", () =>  {
    addToStoreTiles([[false, false]])
    addToStoreLocation([0, 0])
    handleKeyDown({key: ":"})
    handleKeyDown({key: "l"})

    expect(store.getState().player.position).toEqual([0, 0])
    vimMoves()
  })

})

describe("'w' and 'b' inputs", () =>  {

  describe("cannot jump if not next to a bin", () =>  {

    it("does not jump with 'w' command unless next to a bin", () =>  {
      addToStoreTiles([[false, false, false]])
      addToStoreLocation([0, 0])
      handleKeyDown({key: "w"})

      expect(store.getState().player.position).toEqual([0, 0])
    })

    it("does not jump with 'b' command unless next to a bin", () =>  {
      addToStoreTiles([[false, false, false]])
      addToStoreLocation([64, 0])
      handleKeyDown({key: "b"})

      expect(store.getState().player.position).toEqual([64, 0])
    })

  })

  describe("can jump over bins with the commands 'w' and 'b'", () =>  {

    it("jumps with 'w' command when next to a bin", () =>  {
      addToStoreTiles([[false, true, false]])
      addToStoreLocation([0, 0])
      handleKeyDown({key: "w"})

      expect(store.getState().player.position).toEqual([64, 0])
    })


    it("jumps with 'b' command when next to a bin", () =>  {
      addToStoreTiles([[false, true, false]])
      addToStoreLocation([64, 0])
      handleKeyDown({key: "b"})

      expect(store.getState().player.position).toEqual([0, 0])
    })

  })

})

