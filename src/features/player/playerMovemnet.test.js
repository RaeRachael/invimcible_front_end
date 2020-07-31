// import React from "react";
import getSpriteLocation from "./movement";
import handleKeyDown from "./movement";
import store from "../../config/store";
// import Player from "./index.js";

describe("Player", () => {

  it("can move east", () => {
    store.dispatch({
      type: "UPDATE_MAP_STORE",
      payload: {
        loaded: true,
        tiles: [[{"value":"SC4","x":32,"y":224,"blocked":false},{"value":"SPD","x":96,"y":224,"blocked":false}]
        ,[{"value":"SC4","x":32,"y":224,"blocked":false},{"value":"SPD","x":96,"y":224,"blocked":false}]],
        level: 1
      },
    })
    store.dispatch({
      type: "UPDATE_PLAYER_STORE",
      payload: {
        position: [0, 0],
            walkIndex: 0
      }
    })
    handleKeyDown('h')
    setTimeout(function (){
      expect(store.getState().player.position).toEqual([32, 0])
    }, 100)
  });

  it("can move west", () => {
    store.dispatch({
      type: "UPDATE_MAP_STORE",
      payload: {
        loaded: true,
        tiles: [[{"value":"SC4","x":32,"y":224,"blocked":false},{"value":"SPD","x":96,"y":224,"blocked":false}]
        ,[{"value":"SC4","x":32,"y":224,"blocked":false},{"value":"SPD","x":96,"y":224,"blocked":false}]],
        level: 1
      },
    })
    store.dispatch({
      type: "UPDATE_PLAYER_STORE",
      payload: {
        position: [32, 0],
            walkIndex: 0
      }
    })
    handleKeyDown('l')
    setTimeout(function (){
      expect(store.getState().player.position).toEqual([0, 0])
    }, 100)
  });

  it("can move south", () => {
    store.dispatch({
      type: "UPDATE_MAP_STORE",
      payload: {
        loaded: true,
        tiles: [[{"value":"SC4","x":32,"y":224,"blocked":false},{"value":"SPD","x":96,"y":224,"blocked":false}]
        ,[{"value":"SC4","x":32,"y":224,"blocked":false},{"value":"SPD","x":96,"y":224,"blocked":false}]],
        level: 1
      },
    })
    store.dispatch({
      type: "UPDATE_PLAYER_STORE",
      payload: {
        position: [0, 0],
            walkIndex: 0
      }
    })
    handleKeyDown('j')
    setTimeout(function (){
      expect(store.getState().player.position).toEqual([0, 32])
    }, 100)
  });

  it("can move north", () => {
    store.dispatch({
      type: "UPDATE_MAP_STORE",
      payload: {
        loaded: true,
        tiles: [[{"value":"SC4","x":32,"y":224,"blocked":false},{"value":"SPD","x":96,"y":224,"blocked":false}]
        ,[{"value":"SC4","x":32,"y":224,"blocked":false},{"value":"SPD","x":96,"y":224,"blocked":false}]],
        level: 1
      },
    })
    store.dispatch({
      type: "UPDATE_PLAYER_STORE",
      payload: {
        position: [0, 32],
            walkIndex: 0
      }
    })
    handleKeyDown('k')
    setTimeout(function (){
      expect(store.getState().player.position).toEqual([0, 0])
    }, 100)
  });

  it("can not move off the map", () => {
    store.dispatch({
      type: "UPDATE_MAP_STORE",
      payload: {
        loaded: true,
        tiles: [[{"value":"SC4","x":32,"y":224,"blocked":false},{"value":"SPD","x":96,"y":224,"blocked":false}]
        ,[{"value":"SC4","x":32,"y":224,"blocked":false},{"value":"SPD","x":96,"y":224,"blocked":false}]],
        level: 1
      },
    })
    store.dispatch({
      type: "UPDATE_PLAYER_STORE",
      payload: {
        position: [0, 0],
            walkIndex: 0
      }
    })
    handleKeyDown('k')
    setTimeout(function (){
      expect(store.getState().player.position).toEqual([0, 0])
    }, 100)
  });

  it("can not move when level isn't loaded", () => {
    store.dispatch({
      type: "UPDATE_MAP_STORE",
      payload: {
        loaded: false,
        tiles: [],
        level: 1
      },
    })
    store.dispatch({
      type: "UPDATE_PLAYER_STORE",
      payload: {
        position: [0, 32],
            walkIndex: 0
      }
    })
    handleKeyDown('k')
    setTimeout(function (){
      expect(store.getState().player.position).toEqual([0,32])
    }, 100)
  });

  it("can not move into a blocked tile", () => {
    store.dispatch({
      type: "UPDATE_MAP_STORE",
      payload: {
        loaded: true,
        tiles: [[{"value":"SC4","x":32,"y":224,"blocked":true},{"value":"SPD","x":96,"y":224,"blocked":false}]
        ,[{"value":"SC4","x":32,"y":224,"blocked":false},{"value":"SPD","x":96,"y":224,"blocked":false}]],
        level: 1
      },
    })
    store.dispatch({
      type: "UPDATE_PLAYER_STORE",
      payload: {
        position: [0, 32],
            walkIndex: 0
      }
    })
    handleKeyDown('k')
    setTimeout(function (){
      expect(store.getState().player.position).toEqual([0,32])
    }, 100)
  });

  xit("returns a sprite location", () => {
    const walkIndex = 1
    const direction = "WEST"
    expect(getSpriteLocation(direction, walkIndex)).toEqual("WEST")
  });
});
